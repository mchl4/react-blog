import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/developer/ui/home/Home"
import Single from "./components/pages/developer/ui/single/Single"
import Post from "./components/pages/developer/dashboard/post/Post"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import ProtectedRoute from "./components/access/ProtectedRoute"
import Login from "./components/access/Login"

function App() {
  const queryClient = new QueryClient
 
   return (
   
    
    <QueryClientProvider client={queryClient}>
       <StoreProvider>
    <Router>
      <Routes>
      <Route path="/post" element={
          <ProtectedRoute>
          <Post /> 
          </ProtectedRoute>
          } />
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/single" element={<Single/>}/>
      </Routes>
    </Router>

    </StoreProvider>
    </QueryClientProvider>
   
   
   )
 }
 
 export default App
