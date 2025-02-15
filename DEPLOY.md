### Deploy

Next.js에서는 **Static**과 **Dynamic** 두 가지 모드가 존재한다.

## 1. Static 모드

- `next.config.js`에서 `output: 'export'` 설정
- Next.js 서버 없이 완전한 **HTML 페이지로 구성된 정적인 사이트**
- **빌드하는 순간 컨텐츠가 결정됨**
- 수정이 필요할 경우 **다시 빌드해야 반영됨**
- **SSG (Static Site Generation)** 방식
- [공식 문서 참고](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

## 2. Dynamic 모드 (기본 설정)

- Next.js가 기본적으로 동작하는 모드
- 요청이 들어올 때마다 페이지를 **서버에서 동적으로 렌더링**
- 데이터 변경이 잦은 페이지에 적합

---

## 3. ISR (Incremental Static Regeneration)

### ✅ ISR이 필요한 이유

- 컨텐츠가 종종 변경되지만 **매번 빌드하기 부담스러울 때**
- 완전히 **Dynamic 모드로 가면 서버 부담이 커지므로**, 이를 보완하기 위한 기능

### ✅ ISR 동작 방식

1. **빌드 시 `generateStaticParams`를 이용해 초기 컨텐츠 생성**
2. 이후 **데이터가 추가될 때 동적으로 생성**
3. `export const revalidate = 3600;` 설정 시,
   - **기존 Static 페이지를 일정 주기(3600초 = 1시간)마다 재생성**
   - 기존 Static 페이지가 **자동으로 새롭게 빌드되어 제공됨**

---

## 4. Multi-Zones

### ✅ Multi-Zones 개념

- **마이크로 프론트엔드(Micro Frontend)**를 지원하기 위한 기능
- 하나의 애플리케이션을 여러 개의 **Next.js 프로젝트**로 나누어 관리 가능

### ✅ Multi-Zones 활용 방법

- 서로 다른 Next.js 앱을 **동일한 도메인에서 서브 경로로 분리** 가능
- 예제:
  - `example.com/blog` → **Next.js 프로젝트 A**
  - `example.com/shop` → **Next.js 프로젝트 B**
- 각 애플리케이션이 **독립적으로 배포 및 관리**되며, 특정 페이지만 다른 Next.js 앱에서 가져올 수 있음

🔗 [공식 문서 참고](https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones)

---

## 5. Product Checklist

- 배포 시 Next.js에서 기본으로 제공하는 최적화 기법 및 추가해야 할 최적화 기법
- 🔗 [공식 문서 참고](https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist)
