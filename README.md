# Illurei Entertainment Website

Official web application for **Illurei Environmental Innovations & Entertainment** (`www.illureientertainment.com`).

## Structure

The application is organized into three main sections with directional side-to-side transitions:

1. **Innovations** — Bio Cities Project, Zero-Emission Mobility, Vision metrics, Join Our Mission, Support Our Vision, and the official Press Release PDF viewer (`USA FOR IMMEDIATE RELEASE.pdf`).
2. **Entertainment** — Film & Television slate (*The Thought*, *Chill Pill — The TV Series*, *The Greenwash Project*, *Levon*), interactive full-resolution artwork gallery, dedicated **Music** player with playback controls & local audio upload, and clickable **IMDb Profile** link (`https://www.imdb.com/name/nm5042217/`).
3. **Contact** — Direct `mailto:` links for `contact@luminouscapital.com` and `illureiinc@gmail.com`, phone numbers (`+1 (650) 564-7670`, `+43 (650) 941-6297`), Vienna & New York locations, contact inquiry form, and newsletter subscription.

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Adding Client Audio Files & Press Release PDF (Optional)

- **Audio tracks**: Add `.mp3` or `.wav` files into `public/audio/` and add their `audioUrl` (e.g., `'/audio/levon-track.mp3'`) to `DEFAULT_MUSIC_TRACKS` in `src/data/siteData.ts`. Users can also load local audio files directly via the **Load Audio File** button in the Music Player.
- **Press Release PDF**: Users can load `USA FOR IMMEDIATE RELEASE.pdf` directly in the **Innovations → Press Release & Media Briefing Document** panel, or place it in `public/documents/`.

## GitHub Upload Instructions

```bash
git init
git add .
git commit -m "Initial Illurei Entertainment website"
git branch -M main
git remote add origin https://github.com/<your-username>/illurei-entertainment.git
git push -u origin main
```

## Vercel Deployment & Custom Domain (`www.illureientertainment.com`)

1. Sign in to [Vercel](https://vercel.com) and click **Add New → Project**.
2. Import your GitHub repository (`illurei-entertainment`).
3. Vercel automatically detects **Vite** via `vercel.json`:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.
5. To connect your custom domain:
   - Open your project in Vercel → **Settings → Domains**.
   - Add `www.illureientertainment.com` and `illureientertainment.com`.
   - At your DNS registrar, configure:
     - `CNAME` record for `www` pointing to `cname.vercel-dns.com`
     - `A` record for `@` (root) pointing to `76.76.21.21`
   - SSL certificates are provisioned automatically by Vercel once DNS propagates.
