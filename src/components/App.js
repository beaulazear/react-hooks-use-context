import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider, ThemeContext } from "../context/theme";

function App() {
  
  return (
    <ThemeProvider>
      <main className={ThemeContext}>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
