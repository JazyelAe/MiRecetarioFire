// ============================================================
//  PEGA AQUÍ LA CONFIGURACIÓN DE TU PROYECTO DE FIREBASE
//  (Firebase Console > Configuración del proyecto > Tus apps > Web)
//  Mientras digan "TU_..." la app funciona en MODO LOCAL
//  (guarda en el navegador) para que puedas probarla.
// ============================================================
export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

export const configurado = !firebaseConfig.apiKey.startsWith("TU_");
