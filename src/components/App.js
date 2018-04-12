import './../App.sass'
import { NewsForm, NewsList, SortNews } from './containers'
// import { hot } from 'react-hot-loader'

const App = () =>
    <div className="page__wrapper">
        <NewsForm />
        <SortNews />
        <NewsList />
    </div>

export default App

// export default hot(module)(App)