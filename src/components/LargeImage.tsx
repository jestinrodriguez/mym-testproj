const LargeImage = () => {
  return (
  <div className="grid grid-cols-12 h-full">
    <div className="hidden col-span-3 h-full md:flex items-end">
      <img src="/img/lg-img-1.jpg" className="h-[80%] lg:h-[90%] w-full object-cover" />
    </div>
    <div className="col-span-12 md:col-span-9 h-full relative">
      <img src="/img/lg-img-2.jpg" className="h-full w-full object-cover max-h-[860px]" />
      <div className="absolute top-5 left-5">
        <img className="w-24 lg:w-36" src="/img/concierge-logo-purple.png" alt="Logo"/>
      </div>
    </div>
  </div>
  )
}

export default LargeImage