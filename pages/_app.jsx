//imports
import '../styles/globals.css'
import '../styles/output.css'
//font-awesome-import
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faAnglesDown, faCloudDownload} from '@fortawesome/free-solid-svg-icons';

//adobe-fonts-import
<link rel="stylesheet" href="https://use.typekit.net/yvd2asw.css"/>

library.add(faAnglesDown, faCloudDownload);
config.autoAddCss = false;

//app starts
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
