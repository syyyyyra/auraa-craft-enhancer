import { useState, useRef, useEffect, useCallback } from 'react';
import { Upload, Move, ZoomIn } from 'lucide-react';
import configImg from '@/assets/configurator-preview.jpg';

const ConfiguratorTeaser = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [logoImg, setLogoImg] = useState<HTMLImageElement | null>(null);
  const [logoPos, setLogoPos] = useState({ x: 150, y: 120 });
  const [logoSize, setLogoSize] = useState({ w: 120, h: 120 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const bgImgRef = useRef<HTMLImageElement | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      setLogoSrc(src);
      const img = new Image();
      img.onload = () => {
        setLogoImg(img);
        // Scale to fit ~120px wide, preserve aspect ratio
        const ratio = img.height / img.width;
        setLogoSize({ w: 120, h: Math.round(120 * ratio) });
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Draw background image
    if (bgImgRef.current) {
      ctx.drawImage(bgImgRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Draw logo overlay
    if (logoImg) {
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.globalCompositeOperation = 'multiply';

      const cx = logoPos.x + logoSize.w / 2;
      const cy = logoPos.y + logoSize.h / 2;
      ctx.translate(cx, cy);
      ctx.rotate((2 * Math.PI) / 180);
      ctx.translate(-cx, -cy);

      // Subtle shadow
      ctx.shadowColor = 'rgba(0,0,0,0.15)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      ctx.drawImage(logoImg, logoPos.x, logoPos.y, logoSize.w, logoSize.h);
      ctx.restore();

      // Resize handle (small square at bottom-right)
      ctx.fillStyle = 'hsl(30, 30%, 64%)';
      ctx.fillRect(logoPos.x + logoSize.w - 8, logoPos.y + logoSize.h - 8, 8, 8);
    }
  }, [logoImg, logoPos, logoSize]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      bgImgRef.current = img;
      drawCanvas();
    };
    img.src = configImg;
  }, [drawCanvas]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const getCanvasCoords = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!logoImg) return;
    const { x, y } = getCanvasCoords(e);

    // Check resize handle
    const rX = logoPos.x + logoSize.w - 12;
    const rY = logoPos.y + logoSize.h - 12;
    if (x >= rX && y >= rY && x <= rX + 16 && y <= rY + 16) {
      setIsResizing(true);
      return;
    }

    // Check drag
    if (x >= logoPos.x && x <= logoPos.x + logoSize.w && y >= logoPos.y && y <= logoPos.y + logoSize.h) {
      setIsDragging(true);
      setDragOffset({ x: x - logoPos.x, y: y - logoPos.y });
    }
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && !isResizing) return;
    const { x, y } = getCanvasCoords(e);

    if (isDragging) {
      setLogoPos({ x: x - dragOffset.x, y: y - dragOffset.y });
    } else if (isResizing) {
      const newW = Math.max(40, x - logoPos.x);
      const ratio = logoImg ? logoImg.height / logoImg.width : 1;
      setLogoSize({ w: newW, h: Math.round(newW * ratio) });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Canvas preview */}
        <div className="fade-in-up">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-crosshair"
              onMouseDown={handlePointerDown}
              onMouseMove={handlePointerMove}
              onMouseUp={handlePointerUp}
              onMouseLeave={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUp}
            />
          </div>
        </div>

        {/* Right: Upload and instructions */}
        <div className="fade-in-up" style={{ transitionDelay: '200ms' }}>
          <p className="font-accent text-lg text-accent tracking-[0.15em] mb-4">Interactive Tool</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Preview your logo on your packaging
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Upload your logo and see how it looks on our premium packaging — drag to reposition, resize to fit perfectly.
          </p>

          <label className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-body text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer mb-8">
            <Upload className="w-4 h-4" />
            Upload Your Logo
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </label>

          {logoSrc && (
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <Move className="w-4 h-4 text-accent" />
                <span>Drag to reposition your logo</span>
              </div>
              <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <ZoomIn className="w-4 h-4 text-accent" />
                <span>Drag the corner handle to resize</span>
              </div>
            </div>
          )}

          {!logoSrc && (
            <div className="space-y-3 mt-4">
              <p className="font-body text-sm text-muted-foreground">
                Supported formats: PNG, JPG, SVG
              </p>
              <p className="font-body text-sm text-muted-foreground">
                For best results, use a transparent PNG logo.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorTeaser;
