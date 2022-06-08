import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { Background } from './components/background/style';
import { ContentPage } from './components/contentpage/style';
import { SideBar } from './components/sidebarpage';
import { Home } from './pages/home/home';

export function AppCore() {
    return (
        <Background>
            <SideBar />
            <ContentPage>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </ContentPage>
        </Background>
    )
}