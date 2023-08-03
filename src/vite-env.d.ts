/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KAKAO_REST_KEY: string;
  readonly VITE_DOMAIN: string;
  readonly VITE_ENDPOINT_URL: string;
  readonly VITE_APPLE_NONCE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
