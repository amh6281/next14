interface BeforeLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const BeforeLoginLayout = ({ children, modal }: BeforeLoginLayoutProps) => {
  return (
    <div className='flex flex-row bg-white w-dvw h-dvh'>
      {children}
      {modal}
    </div>
  );
};

export default BeforeLoginLayout;
