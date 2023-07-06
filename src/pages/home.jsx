import React, {useRef} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import emailjs from '@emailjs/browser';


export function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e54u47k', 'template_h6z6i0s', form.current, 'tRfxtZg8R_OhJXCuW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/home-bg.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Discover the Beauty of Elegance and Style at Matt-Khai Beauty Salon
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                At Matt-Khai Beauty Salon, we believe that true beauty is a reflection 
                of elegance and style. Step into our world of exceptional pampering and 
                indulge in luxurious treatments that will leave you feeling radiant, 
                confident, and utterly transformed.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with me is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Experience pure pleasure as Amy Jantjies, the owner of Matt-Khai 
                Beauty Salon, pampers you with personalized attention, meticulous care, 
                and a warm atmosphere that brings out your inner beauty.
                <br />
                <br />
                With unwavering commitment, Amy Jantjies at Matt-Khai Beauty Salon 
                delivers exceptional results through her expertise and genuine passion. 
                Experience pure bliss as Amy pampers you with stunning nail designs, 
                rejuvenating facials, and transformative skincare therapies, leaving you 
                feeling radiant and renewed.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/oven.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Indulge in top-notch services at Matt-Khai Beauty Salon, 
                    where our dedicated team ensures an exceptional and 
                    rejuvenating experience.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Here are our Results">
            Experience transformative results at Matt-Khai Beauty Salon, 
            where our expert techniques and personalized approach leave 
            you looking and feeling your absolute best.  
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials, index }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Love Beautification">
            Love Beautification is a transformative experience 
            that embraces self-love and enhances natural beauty 
            through personalized treatments, fostering a harmonious 
            balance of mind, body, and soul.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to get in touch with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center" ref={form} onSubmit={sendEmail}>
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" type="text" name="from_name"/>
              <Input variant="standard" size="lg" label="Email Address" type="email" name="from_email"/>
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} name="message"/>
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
