sports -
  match -
  finder/
├
── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── register/
│   │   │   │       └── page.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── matches/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RegisterForm.tsx
│   │   │   ├── Map/
│   │   │   │   └── MapComponent.tsx
│   │   │   ├── Matches/
│   │   │   │   ├── MatchCard.tsx
│   │   │   │   └── MatchList.tsx
│   │   │   ├── Chat/
│   │   │   │   └── ChatComponent.tsx
│   │   │   └── Layout/
│   │   │       ├── Header.tsx
│   │   │       └── Footer.tsx
│   │   ├── lib/
│   │   │   ├── api.ts
│   │   │   └── auth.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── types/
│   │       └── index.ts
│   ├── public/
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.
module.ts
│   │   │   └── auth.service.ts
│   │   ├── matches/
│   │   │   ├── matches.controller.ts
│   │   │   ├── matches.
module.ts
│   │   │   └── matches.service.ts
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.
module.ts
│   │   │   └── users.service.ts
│   │   ├── chat/
│   │   │   ├── chat.gateway.ts
│   │   │   └── chat.
module.ts
│   │   ├── app.
module.ts
│   │   └── main.ts
│   ├── test/
│   ├── nest-cli.json
│   └── package.json
├── docker-compose.yml
└── README.md

