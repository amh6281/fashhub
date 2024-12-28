# 프로젝트 디렉토리 구조

```plaintext
app
├── (public)                   # 공개적으로 접근 가능한 페이지
│   ├── @modal                 # 패러렐 라우트
│   │   ├── default.tsx        # 패러렐 라우트의 기본 페이지 컴포넌트, 패러렐 라우트 바로 하위 deps에 Page가 없고 한 deps 더 아래 Page가 있을 때 사용
│   │   ├── (.)flow            # 인터셉팅 라우트 디렉토리
│   │   │   └── signup         # 회원가입 관련 인터셉팅 라우트. 즉, localhost:3000/flow/signup으로 이동 시 인터셉팅 된 (.)flow/signup/page.tsx가 렌더링, 뒷배경은 (public)의 page.tsx
│   │   │       └── page.tsx   # 회원가입 페이지 컴포넌트
│   ├── flow                   # 일반 라우트 디렉토리
│   │   └── signup             # 회원가입 페이지 디렉토리
│   │       └── page.tsx       # 회원가입 페이지 컴포넌트
│   ├── layout.tsx             # 공개 페이지의 공통 레이아웃 컴포넌트
│   └── page.tsx               # 공개 페이지의 기본 엔트리 포인트
├── (private)              # 로그인 후 접근 가능한 페이지
│   ├── dashboard          # 대시보드 페이지
│   │   └── page.tsx       # 대시보드 페이지 파일
│   ├── profile            # 프로필 페이지
│   │   └── page.tsx       # 프로필 페이지 파일
│   └── settings           # 설정 페이지
│       └── page.tsx       # 설정 페이지 파일
├── layout.tsx             # 전역 레이아웃 설정
├── global.css             # 전역 CSS 파일
