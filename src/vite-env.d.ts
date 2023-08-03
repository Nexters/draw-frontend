/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KAKAO_REST_KEY: string;
  readonly VITE_DOMAIN: string;
  readonly VITE_ENDPOINT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
