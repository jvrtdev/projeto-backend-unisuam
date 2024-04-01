import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { ThemeProvider } from "@/contexts/theme-provider"

export default function App() {


  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
       <RouterProvider router={router} />
    </ThemeProvider>
    </>
  )
}


