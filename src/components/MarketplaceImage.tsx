const MarketplaceImage = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="relative max-w-4xl w-full">
            <img 
              src="/lovable-uploads/df765427-3cfc-464b-b60f-bb4c7c33ce86.png"
              alt="Peer 2 Peer Service Marketplace - Askit Platform Overview"
              className="w-full h-auto object-contain mix-blend-screen"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
                background: 'transparent'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceImage;