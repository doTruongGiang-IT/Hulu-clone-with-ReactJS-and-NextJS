import '../styles/globals.css';
import Layout from '../components/Layout';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Layout>
        <Component store={store} {...pageProps} />
      </Layout>
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
