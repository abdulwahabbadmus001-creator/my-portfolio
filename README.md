# Wahab O. Badmus — Portfolio

A restrained, editorial portfolio for software, research, experience and ongoing learning. Built with Next.js App Router, TypeScript and Tailwind CSS. No database or backend required.

## Run

Requires Node.js 20+.

```powershell
npm install
npm run dev
```

Visit http://localhost:3000. Production: `npm run typecheck`, `npm run lint`, `npm run build`, `npm run start`.

## Structure

- `app/` — routes, layout, metadata, robots and sitemap.
- `components/` — reusable site layout and filterable project cards.
- `data/content.ts` — **all editable content**, projects, publications, experience, education, learning, skills and social links.
- `public/` — favicon and local static assets.

## Editing

Update projects, statuses, links and research in `data/content.ts`. Only add a `live` URL once verified. Update social entries in `social`; add unverified services only after confirming their correct URL. Replace the portrait by saving the original photograph at `public/images/wahab-cover.webp`, then change the hero `img` source in `app/page.tsx` to `/images/wahab-cover.webp`.

## Deploy

Push the directory to GitHub and import it as a Next.js project into Vercel or Netlify. Use build command `npm run build`; Netlify requires its Next.js runtime support. Set the production domain in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` before launch.

## Verification limitations

Repository names were inventoried through connected GitHub. Deployment URLs were supplied by the portfolio owner; runtime availability has not been independently validated. The portrait URL points to the owner's source repository until the original asset can be copied locally. X, Medium, Facebook, Instagram and TikTok were intentionally omitted pending verified URLs. EduPath was not confidently mapped to a public repository or deployment and is not represented as live. Review descriptions and technical stacks against current READMEs before public launch.
