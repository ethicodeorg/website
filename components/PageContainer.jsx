import theme from '../styles/theme';

const PageContainer = ({ isDark, isCover, children }) => {
  const backgroundColor = isDark ? theme.colors.darkBackground : theme.colors.background;
  return (
    <div className="page-container">
      {children}
      <style jsx>{`
        .page-container {
          padding: 0 20px 50px;
          background-color: ${isCover
            ? isDark
              ? 'rgba(0, 0, 0, 0.5)'
              : 'rgba(255, 255, 255, 0.5)'
            : backgroundColor};
        }

        @media screen and (min-width: 800px) {
          .page-container {
            padding: 0 45px 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default PageContainer;
