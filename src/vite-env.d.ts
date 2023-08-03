/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KAKAO_REST_KEY: string;
  readonly VITE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
