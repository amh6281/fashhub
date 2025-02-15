# Next.js 프로젝트 빌드 및 배포 과정

## 1. 빌드 (Build)

- **npm run build**
  - 프로젝트 전체를 빌드하여 최적화된 정적 파일 및 서버 코드를 생성함.
  - 빌드 결과는 `out/` (Static Export 모드) 또는 `.next/` (기본 모드) 폴더에 저장됨.

## 2. Next.js 서버 실행 (Local Environment)

- **npm start**
  - 빌드 후 `npm start` 명령으로 Next.js 서버를 실행함.
  - 로컬 환경에서는 `localhost:3000`에서 실제 배포된 페이지를 확인할 수 있음.
  - 단, 이 방식은 개발자 PC에서 실행되며, PC가 켜져 있어야 페이지가 지속적으로 운영됨.

## 3. 실제 서비스 배포

### ✅ AWS 서버에 배포

- **EC2 인스턴스 생성 및 배포**
  - AWS EC2 인스턴스를 생성한 후, Next.js 프로젝트를 EC2에 업로드함.
  - EC2 인스턴스에서 `npm run build`와 `npm start`를 실행하여 서버를 구동함.

### ✅ 도메인 연결

- **도메인 구매 및 DNS 설정**
  - 도메인을 구매한 후, Route 53, Cloudflare 등의 DNS 서비스를 이용하여 도메인을 EC2 인스턴스의 IP 주소와 연결함.
  - 예: `example.com` → EC2 서버 IP

## 4. 전체 시스템 구성 및 배포

### 🔹 프론트엔드 서버 배포

- Next.js 프로젝트를 빌드한 후, EC2, Vercel, Netlify 등에서 호스팅.
- 정적 파일과 서버 코드가 포함되어 Next.js 서버를 통해 서비스됨.

### 🔹 백엔드 서버 배포

- Node.js, Express, NestJS 등의 백엔드 API 서버를 별도로 배포.
- 백엔드 서버는 프론트엔드와 통신하며 데이터 처리 및 비즈니스 로직을 수행함.
- AWS Lambda, EC2, Heroku, Railway 등 다양한 플랫폼을 활용할 수 있음.

### 🔹 데이터베이스 (DB) 서버 배포

- MySQL, PostgreSQL, MongoDB 등 데이터베이스 서버를 운영.
- AWS RDS, Supabase, PlanetScale 등의 관리형 DB 서비스를 사용하거나, EC2에 직접 설치할 수 있음.
- 관리형 서비스를 이용하면 유지보수가 용이함.

## 5. 추가 고려 사항

- **CI/CD 파이프라인 구축**
  - GitHub Actions, Jenkins, GitLab CI 등을 통해 빌드, 테스트, 배포 자동화 구현.
- **모니터링 및 로깅**
  - CloudWatch, Datadog, Sentry 등을 사용하여 시스템 모니터링 및 오류 로깅 설정.
- **보안 및 성능 최적화**
  - HTTPS, 보안 헤더, CDN 적용 등을 통해 보안을 강화하고 성능을 최적화.
