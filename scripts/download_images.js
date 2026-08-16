import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const imagesToFetch = [
  { name: 'doctor-sarah.jpg', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000' },
  { name: 'doctor-about.jpg', url: 'https://images.unsplash.com/photo-1594824813566-78a9327702f3?auto=format&fit=crop&q=80&w=1000' },
  { name: 'clinic-hero.jpg', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000' },
  { name: 'teeth-whitening.jpg', url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800' },
  { name: 'porcelain-veneers.jpg', url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800' },
  { name: 'invisalign-aligners.jpg', url: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800' },
  { name: 'dental-implants.jpg', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800' },
  { name: 'root-canal.jpg', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800' },
  { name: 'teeth-cleaning.jpg', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800' }
];

async function downloadAll() {
  for (const img of imagesToFetch) {
    try {
      const res = await fetch(img.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      const dest = path.join(imagesDir, img.name);
      fs.writeFileSync(dest, buffer);
      console.log(`Successfully saved public/images/${img.name} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Error saving ${img.name}:`, e.message);
    }
  }

  // Copy doctor sarah from brain folder if present as fallback
  const brainDir = `C:\\Users\\keshav kumar\\.gemini\\antigravity-ide\\brain\\c39b0c25-0b6a-461c-b109-67ceb8190e9e`;
  if (fs.existsSync(brainDir)) {
    const files = fs.readdirSync(brainDir);
    const docSarahFile = files.find(f => f.startsWith('doctor_sarah_') && f.endsWith('.png'));
    if (docSarahFile) {
      fs.copyFileSync(path.join(brainDir, docSarahFile), path.join(imagesDir, 'doctor-sarah-ai.png'));
      console.log('Copied doctor-sarah-ai.png');
    }
  }
}

downloadAll();
