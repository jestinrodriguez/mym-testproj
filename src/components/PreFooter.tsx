import { useState } from 'react';
import { Button } from './ui/button'
import { Label } from './ui/label'

const PreFooter = () => {
  const [errors, setErrors] = useState({ firstname: false, lastname: false, email: false });

  const validateField = (id: string, value: string) => {
    if (id === "email") {
      return !/\S+@\S+\.\S+/.test(value.trim());
    }
    return !value.trim();
  };

  const handleBlur = ({ target: { id, value } }: React.FocusEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, [id]: validateField(id, value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newErrors = {
      firstname: validateField("firstname", form.firstname.value),
      lastname: validateField("lastname", form.lastname.value),
      email: validateField("email", form.email.value),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      console.log("Form submitted successfully");
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="container">
          <div className="flex flex-col sm:flex-row justify-center items-center py-20">
            <p className="sm:mr-7 text-black alt-font font-medium pb-4 leading-6 sm:pb-0 xl:text-[20px] xl:leading-[26px]">We’d love to hear about your project</p>
            <Button className="alt-font font-semibold" variant="red">Get in touch</Button>
          </div>
          <div className='grid grid-cols-12 pt-8'>
          <div className="col-span-12 lg:col-span-2 mb-[30px] flex md:justify-center xl:justify-start md:px-[13px]">
            <a href="https://www.makeyourmarkdigital.com/">
              <img src="/img/mym-logo.png" className="max-h-[56px] mt-[2px]"/>
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-3 md:px-[13px]">
            <div className="pre-footer-header mt-[2px]">Contact Information</div>
            <div className="text-medium-gray md:text-[16px]">
              <p className="md:leading-5">40 E. Montgomery Avenue Ardmore, Pa 19003</p>
              <p className="md:leading-5">Email:
                <a className="font-size13 text-medium-gray" href="mailto:Hello@MakeYourMarkDigital.com"> Hello@MakeYourMarkDigital.com</a>
              </p>
              <p className="md:leading-5">Phone: 917.740.3369</p>
            </div>
            <a href="https://www.makeyourmarkdigital.com/connect/">
              <div className="py-5">
                <Button className="alt-font font-semibold" variant="red">Connect Now</Button>
              </div>
            </a>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-2 md:px-[13px]">
            <div className="pre-footer-header mt-[2px]">Social Networks</div>
            <div className="text-medium-gray md:text-[16px]">
              <a href="https://www.instagram.com/makeyourmarkdigital/" target="_blank">
                <p className="pb-1 md:p-0">Instagram</p>
              </a>
              <a href="https://www.linkedin.com/company/make-your-mark-digital/" target="_blank">
                <p className="pb-1 md:p-0">Linkedin</p>
              </a>
              <a href="https://www.facebook.com/MakeYourMarkDigital/" target="_blank">
                <p className="pb-1 md:p-0">Facebook</p>
              </a>
              <a href="https://twitter.com/makeyourmarkdig" target="_blank">
                <p className="pb-1 md:p-0">Twitter</p>
              </a>
            </div>
              <img className="w-[120px] py-[30px] mt-[30px] border-t border-black" src="/img/WOSB-logo.webp"/>
            <a href="https://www.semrush.com/agencies/" target="_blank">
              <img className="w-[120px] py-[30px] border-t border-black" src="/img/awards-logo.webp"/>
            </a>
            <a href="https://www.expertise.com/business/digital-marketing-agencies/pennsylvania/philadelphia" target="_blank">
              <img className="w-[120px] py-[30px] border-t border-black" src="/img/semrush-logo.webp"/>
            </a>
            <a href="https://portal.us.bn.cloud.ariba.com/profile/public?anId=AN11205055557&sourceApplication=SBN&btpDeploymentEnabled=true" target="_blank">
              <img className="w-[120px] py-[30px] border-t border-black" src="/img/ariba-logo.png"/>
            </a>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-5 md:px-[13px]">
            <div className="pre-footer-header">
              Subscribe to <em>a digital marketing blog</em>
            </div>
            <div className="text-medium-gray font-" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="firstname">First Name *</Label>
              <input
                className={`border-b text-sm w-full indent-[2%] ${errors.firstname ? "border-red" : "border-gray-300"} focus:outline-none`}
                type="text"
                id="firstname"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <Label htmlFor="lastname">Last Name *</Label>
              <input
                className={`border-b text-sm w-full indent-[2%] ${errors.lastname ? "border-red" : "border-gray-300"} focus:outline-none`}
                type="text"
                id="lastname"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <input
                className={`border-b text-sm w-full indent-[2%] ${errors.email ? "border-red" : "border-gray-300"} focus:outline-none`}
                type="email"
                id="email"
                onBlur={handleBlur}
              />
            </div>
            <div className="py-6">
              <Button className="alt-font font-semibold" variant="red" type="submit">
                Subscribe
              </Button>
            </div>
          </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default PreFooter