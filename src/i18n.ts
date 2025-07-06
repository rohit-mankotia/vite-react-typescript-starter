import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          languages: {
            en: 'English',
            zh: '中文',
            pt: 'Português',
            es: 'Español',
            fr: 'Français',
            ja: '日本語',
          },
          home: {
            subsidiaries: {
              cica: {
                name: 'CICA',
                title: 'CICA',
                description: 'CICA',
              },
              citizens: {
                name: 'Citizens',
                title: 'Citizens',
                description: 'Citizens',
              },
              security: {
                name: 'Security',
                title: 'Security',
                description: 'Security',
              },
            },
          },
          header: {
            insurance: {
              link: {
                title: 'Insurance',
              },
              partners: {
                title: 'Partners',
              },
              claim: {
                title: 'Claim',
              },
            },
          },
        }
      },
      zh: {
        translation: {
          languages: {
            en: 'English',
            zh: '中文',
            pt: 'Português',
            es: 'Español',
            fr: 'Français',
            ja: '日本語',
          },
          home: {
            subsidiaries: {
              cica: {
                name: 'CICA (zh)',
                title: 'CICA (zh)',
                description: 'CICA (zh)',
              },
              citizens: {
                name: 'Citizens (zh)',
                title: 'Citizens (zh)',
                description: 'Citizens (zh)',
              },
              security: {
                name: 'Security (zh)',
                title: 'Security (zh)',
                description: 'Security (zh)',
              },
            },
          },
          header: {
            insurance: {
              link: {
                title: 'Insurance (zh)',
              },
              partners: {
                title: 'Partners (zh)',
              },
              claim: {
                title: 'Claim (zh)',
              },
            },
          },
        }
      },
      pt: {
        translation: {
          languages: {
            en: 'English',
            zh: '中文',
            pt: 'Português',
            es: 'Español',
            fr: 'Français',
            ja: '日本語',
          },
          home: {
            subsidiaries: {
              cica: {
                name: 'CICA (pt)',
                title: 'CICA (pt)',
                description: 'CICA (pt)',
              },
              citizens: {
                name: 'Citizens (pt)',
                title: 'Citizens (pt)',
                description: 'Citizens (pt)',
              },
              security: {
                name: 'Security (pt)',
                title: 'Security (pt)',
                description: 'Security (pt)',
              },
            },
          },
          header: {
            insurance: {
              link: {
                title: 'Insurance (pt)',
              },
              partners: {
                title: 'Partners (pt)',
              },
              claim: {
                title: 'Claim (pt)',
              },
            },
          },
        }
      },
      es: {
        translation: {
          languages: {
            en: 'English',
            zh: '中文',
            pt: 'Português',
            es: 'Español',
            fr: 'Français',
            ja: '日本語',
          },
          home: {
            subsidiaries: {
              cica: {
                name: 'CICA (es)',
                title: 'CICA (es)',
                description: 'CICA (es)',
              },
              citizens: {
                name: 'Citizens (es)',
                title: 'Citizens (es)',
                description: 'Citizens (es)',
              },
              security: {
                name: 'Security (es)',
                title: 'Security (es)',
                description: 'Security (es)',
              },
            },
          },
          header: {
            insurance: {
              link: {
                title: 'Insurance (es)',
              },
              partners: {
                title: 'Partners (es)',
              },
              claim: {
                title: 'Claim (es)',
              },
            },
          },
        }
      },
      fr: {
        translation: {
          languages: {
            en: 'English',
            zh: '中文',
            pt: 'Português',
            es: 'Español',
            fr: 'Français',
            ja: '日本語',
          },
          home: {
            subsidiaries: {
              cica: {
                name: 'CICA (fr)',
                title: 'CICA (fr)',
                description: 'CICA (fr)',
              },
              citizens: {
                name: 'Citizens (fr)',
                title: 'Citizens (fr)',
                description: 'Citizens (fr)',
              },
              security: {
                name: 'Security (fr)',
                title: 'Security (fr)',
                description: 'Security (fr)',
              },
            },
          },
          header: {
            insurance: {
              link: {
                title: 'Insurance (fr)',
              },
              partners: {
                title: 'Partners (fr)',
              },
              claim: {
                title: 'Claim (fr)',
              },
            },
          },
        }
      },
      ja: {
        translation: {
          languages: {
            en: 'English',
            zh: '中文',
            pt: 'Português',
            es: 'Español',
            fr: 'Français',
            ja: '日本語',
          },
          home: {
            subsidiaries: {
              cica: {
                name: 'CICA (ja)',
                title: 'CICA (ja)',
                description: 'CICA (ja)',
              },
              citizens: {
                name: 'Citizens (ja)',
                title: 'Citizens (ja)',
                description: 'Citizens (ja)',
              },
              security: {
                name: 'Security (ja)',
                title: 'Security (ja)',
                description: 'Security (ja)',
              },
            },
          },
          header: {
            insurance: {
              link: {
                title: 'Insurance (ja)',
              },
              partners: {
                title: 'Partners (ja)',
              },
              claim: {
                title: 'Claim (ja)',
              },
            },
          },
        }
      }
    }
  });

export default i18n;
