# Simple HTTP Server for FlexiGenAI
$port = 8000
$url = "http://localhost:$port/"

Write-Host "Starting FlexiGenAI local server..." -ForegroundColor Green
Write-Host "Server running at: $url" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

# Create a simple HTTP listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)
$listener.Start()

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $localPath = $request.Url.LocalPath
    if ($localPath -eq "/") {
        $localPath = "/index.html"
    }
    
    $filePath = Join-Path $PSScriptRoot ($localPath.TrimStart('/'))
    
    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $contentType = "text/html"
        
        if ($filePath.EndsWith(".css")) {
            $contentType = "text/css"
        } elseif ($filePath.EndsWith(".js")) {
            $contentType = "application/javascript"
        } elseif ($filePath.EndsWith(".png")) {
            $contentType = "image/png"
        } elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) {
            $contentType = "image/jpeg"
        }
        
        $response.ContentType = $contentType
        $response.ContentLength64 = $content.Length
        $response.StatusCode = 200
        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
        $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found")
        $response.ContentLength64 = $notFound.Length
        $response.OutputStream.Write($notFound, 0, $notFound.Length)
    }
    
    $response.Close()
}

