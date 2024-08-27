
import AccordianItem from './AccordianItem';

const Accordian = () => {
  const serviceLinks = [
    { name: "FAQs", link: "home" },
    { name: "Gallary", link: "movies" },
    { name: "Adopt Pet", link: "th shows" },
    { name: "Our Team", link: "pages" },
    { name: "Site Map", link: "blog" },
    { name: "Privacy Policy", link: "contact" },
  ];

  const companyLinks = [
    { name: "Service", link: "home" },
    { name: "Features", link: "movies" },
    { name: "Our Team", link: "th shows" },
    { name: "Portfolio", link: "pages" },
    { name: "Blog", link: "blog" },
    { name: "Contact Us", link: "contact" },
  ];

  const categoriesLinks = [
    { name: "Movies", link: "home" },
    { name: "Tv Shows", link: "movies" },
    { name: "Comedy", link: "th shows" },
    { name: "Cartoons", link: "pages" },
    { name: "Horror", link: "blog" },
    { name: "Other", link: "contact" },
  ];

  const downloadAppLinks = [
    { name: "Download Our Mobile App", link: "home" },
    { name: "Gallary", link: "movies" },
  ];

  return (
    <div className=" bg-[#01111b] rounded-lg">
      <AccordianItem title="Service" answer="I like to use iOS products" links={serviceLinks} />
      <AccordianItem title="Company" answer="I like to use Tailwind" links={companyLinks} />
      <AccordianItem title="Categories" answer="I am using Supabase!" links={categoriesLinks} />
      <AccordianItem title="DownLoad App" answer="I am using Supabase!" links={downloadAppLinks} />
    </div>
  );
};

export default Accordian;
