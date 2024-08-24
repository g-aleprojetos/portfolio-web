import React, {useState, useEffect, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {languages, namespaces} from 'utils/i18n/i18n.constants';
import {useBackgroundContext} from 'context/background';
import FlagBrasilSVG from 'assets/icons/iFlag-Brasil-active.svg';
import FlagEUASVG from 'assets/icons/iFlag-USA-active.svg';
import FlagFranceSVG from 'assets/icons/iFlag-France-active.svg';
import * as S from './DropDown.styles';

interface IOption {
  testId: string;
  icon: string;
  idioma: () => string;
  alt: () => string;
  abreviatura: string;
}

export const Dropdown: React.FC = () => {
  const {themeDark} = useBackgroundContext();
  const {t, i18n} = useTranslation(namespaces.components.dropdown);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  const [activeOption, setActiveOption] = useState<IOption | null>(null);

  const options = useMemo(
    () => [
      {
        testId: 'idioma-portugues',
        abreviatura: languages.pt,
        icon: FlagBrasilSVG,
        idioma: () => t('portuguese'),
        alt: () => t('altFlagBrazil'),
      },
      {
        testId: 'idioma-ingles',
        abreviatura: languages.en,
        icon: FlagEUASVG,
        idioma: () => t('english'),
        alt: () => t('altFlagEUA'),
      },
      {
        testId: 'idioma-frances',
        abreviatura: languages.fr,
        icon: FlagFranceSVG,
        idioma: () => t('french'),
        alt: () => t('altFlagFrance'),
      },
    ],
    [t],
  );

  useEffect(() => {
    const resolvedLanguage = i18n.resolvedLanguage;

    const initialOption = options.find(option => {
      if (resolvedLanguage === 'pt')
        return option.testId === 'idioma-portugues';
      if (resolvedLanguage === 'en') return option.testId === 'idioma-ingles';
      if (resolvedLanguage === 'fr') return option.testId === 'idioma-frances';
      return null;
    });

    if (initialOption) {
      setSelectedOption(initialOption);
      setActiveOption(initialOption);
    }
  }, [i18n.resolvedLanguage, options]);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: IOption) => {
    setSelectedOption(option);
    setActiveOption(option);
    i18n.changeLanguage(option.abreviatura);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.Select
        data-testid="dropdown-select"
        $themeDark={themeDark}
        $clicked={isOpen}
        onClick={handleSelectClick}>
        <S.Selected>
          {selectedOption && (
            <S.Flag
              src={selectedOption.icon}
              alt={selectedOption.alt()}
              data-testid={selectedOption.testId}
            />
          )}
          <S.Texto $themeDark={!themeDark}>
            {selectedOption ? selectedOption.idioma() : t('select')}
          </S.Texto>
        </S.Selected>
        <S.Caret $themeDark={themeDark} $rotate={isOpen} />
      </S.Select>
      <S.Menu data-testid="dropdown-menu" $themeDark={themeDark} $open={isOpen}>
        {options.map(option => (
          <S.MenuItem
            key={option.testId}
            $active={activeOption === option}
            $themeDark={themeDark}
            onClick={() => handleOptionClick(option)}
            data-testid={option.testId}>
            <S.ContainerOption>
              <S.Flag src={option.icon} alt={option.alt()} />
              <S.Texto $themeDark={!themeDark}>{option.idioma()}</S.Texto>
            </S.ContainerOption>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.DropdownContainer>
  );
};
