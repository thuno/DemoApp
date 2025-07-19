import { Stack, WiniProvider } from 'wini-mobile-component';
import config from './src/config';
import { HomePage } from './src/screen/page/home/home';
import { LoginPage } from './src/screen/page/login/login';
import { PagePath } from './src/screen/page/router';

function App() {
  return <WiniProvider pid={config.pid} url={config.url} imgUrlId={config.imgUrlId} fileUrl={config.fileUrl} >
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name={PagePath.home} component={HomePage} />
      <Stack.Screen name={PagePath.login} component={LoginPage} />
    </Stack.Navigator>
  </WiniProvider>
}

export default App;
