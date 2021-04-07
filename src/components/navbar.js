// syled components
import { Section, Content, LogoImg, Language, Lang } from './styled_components';

// images
import Logo from '../img/logo.png';
import CZ from '../img/cz.svg';
import EN from '../img/en.svg';

// i18n translation
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    // i18n
    const { t, i18n } = useTranslation();

    const changeLanguage = ln => {
        i18n.changeLanguage(ln);
        localStorage.setItem('lang', ln);
    }

    return(
        <Section>
            <Content>
                <LogoImg src={Logo}/>
                <Language>
                    <Lang>{t('lang')}</Lang>
                    <LogoImg lang src={EN} onClick={() => changeLanguage('en')}/>
                    <LogoImg lang src={CZ} onClick={() => changeLanguage('cz')}/>
                </Language>
            </Content>
        </Section>
    )
}

export default Navbar;