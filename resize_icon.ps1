
Add-Type -AssemblyName System.Drawing
$sourcePath = "c:\Users\admin\Downloads\murali-k.-portfolio\public\images\MKLOGO.png"
$destPath = "c:\Users\admin\Downloads\murali-k.-portfolio\public\favicon.png"

$image = [System.Drawing.Image]::FromFile($sourcePath)
$canvas = New-Object System.Drawing.Bitmap 32, 32
$graph = [System.Drawing.Graphics]::FromImage($canvas)
$graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graph.DrawImage($image, 0, 0, 32, 32)
$canvas.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$canvas.Dispose()
$image.Dispose()
$graph.Dispose()
