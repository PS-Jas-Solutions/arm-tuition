import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.armtuitionpsjassolutions.app',
  appName: 'npx cap add android',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
