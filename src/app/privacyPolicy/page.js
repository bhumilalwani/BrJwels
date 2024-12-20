import React from 'react'
import StaticNav from '../components/StaticNav'
import DynamicNav from '../components/DynamicNav'
import Link from 'next/link'

const page = () => {
    
  return (
    <div>
     
      <div className="flex flex-col min-h-screen">
      <StaticNav />
      <DynamicNav />
      <main className="flex flex-1">
        <SidebarNav />
        <div className="flex-1 overflow-auto">
          <TermsContent />
        </div>
      </main>
    </div>
    </div>
  )
}

const SidebarNav = () => {
    const navItems = [
        { title: 'About Us', href: '/TermsAndConds' },
        { title: 'Contact Us', href: '/TermsAndConds' },
        { title: 'Return Policy', href: '/TermsAndConds' },
        { title: 'Shipping Policy', href: '/TermsAndConds' },
        { title: 'Track Your Order', href: '/TermsAndConds' },
        { title: 'Enhanced Warranty Plan', href: '/TermsAndConds' },
        { title: 'Terms of Use', href: '/TermsAndConds' },
        { title: 'Contests & Sweepstakes', href: '/TermsAndConds' },
        { title: 'Privacy Policy', href: '/privacyPolicy' },
        { title: 'FAQs', href: '/faqs' },
      ];
      
    return (
      <nav className="hidden lg:block w-64 bg-[var(--background-color)] ml-[10vh] p-6 h-fit py-6 sticky top-[10%]">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  const TermsContent = () => {
    const definitions = [
      {
        term: 'Affiliate',
        definition:
          'refers to an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for the election of directors or other managing authority.',
      },
      {
        term: 'Account',
        definition: 'means a unique account created for You to access Our Service or parts of Our Service.',
      },
      {
        term: 'Company',
        definition: '(referred to as either "the Company", "We", "Us" or "Our") refers to Br Inc.',
      },
      {
        term: 'Content',
        definition: 'refers to any text, images or other information that can be posted, uploaded, linked to or otherwise made available by You.',
      },
      {
        term: 'Products',
        definition: 'refers to the products or items offered for sale on the Service.',
      },
      {
        term: 'Orders',
        definition: 'means a request by You to purchase Products from Us.',
      },
      {
        term: 'Promotions',
        definition: 'refers to contests, sweepstakes or other promotions offered through the Service.',
      },
      {
        term: 'Review',
        definition:
          'means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of Our Service.',
      },
      {
        term: 'Service',
        definition: 'refers to the Site and Customer Service.',
      },
      {
        term: 'Third-Party Service',
        definition:
          'means any services or content (including data, information, products or services) provided by a third party that may be displayed, included or made available by the Service.',
      },
      {
        term: 'You',
        definition:
          'means the individual accessing or using the Service, or the Company or a legal entity on behalf of which the individual is accessing or using the Service.',
      },
    ];
  
    return (
      <div className="max-w-4xl pt-[20vh] py-6 lg:pt-[0vh] px-12 lg:px-6 ">
        <h1 className="text-[25px] font-normal tracking-wide text-[var(--terms-color)] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated on September 23, 2024</p>
        <div className="prose prose-gray max-w-none">
          <p className="mb-8">
            Welcome to the Br Website. These Privacy Policy apply to the Br Website located at{' '}
            <a href="/" className="text-blue-600 hover:underline">
              www.Br.com
            </a>
            {' '}and its subsidiaries and Affiliates, including Br&apos;s Sites around the world (collectively the
            &quot;Site&quot;). Please read the below-mentioned Privacy Policy carefully, as they set out Your
            rights and obligations regarding the use of the Site and its Services. By visiting the Site, You agree to be
            bound by the following terms.
          </p>
          <h2 className="text-[25px] font-normal tracking-wide text-[var(--terms-color)] mt-12 mb-8">Definitions</h2>
          <ul className="space-y-4">
            {definitions.map((item, index) => (
              <li key={index} className='' ><span className='text-[var(--primary-color)] text-xl '>&#9679;</span>
                <span className='text-normal text-[var(--terms-color)] font-medium tracking-wide'> &quot;{item.term}&quot;</span> {item.definition}
              </li>
            ))}
          </ul>
          <h2 className='text-[25px] font-normal tracking-wide text-[var(--terms-color)] mb-8 mt-12'>User Account and Placing Orders</h2>
          <p>When You create an Account on the Site, You are liable to provide accurate, complete and current information. Failure to do so constitutes a breach of the Terms of Use, which may result in immediate termination of Your Account from Our Site. It is Your responsibility to safeguard Your password. Do not disclose it to any person or third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your Account.
  <br></br>
  By placing an Order for Products through the Site, You warrant that You are legally capable of entering into binding contracts.
  <br></br>
  </p>
  <h2 className='text-[25px] font-normal tracking-wide text-[var(--terms-color)]  mb-2'></h2>
  <p>Our Site includes a Product Review feature, and includes or may include in the future, discussion forums, user-generated content or other areas or Services in which You or third parties create, post or store any content, messages, materials or other items on Our Site 
      Our Site includes a Product Review feature, and includes or may include in the future, discussion forums, user-generated content or other areas or Services in which You or third parties create, post or store any content, messages, materials or other items on Our Site 
      Our Site includes a Product Review feature, and includes or may include in the future, discussion forums, user-generated content or other areas or Services in which You or third parties create, post or store any content, messages, materials or other items on Our Site 
      Our Site includes a Product Review feature, and includes or may include in the future, discussion forums, user-generated content or other areas or Services in which You or third parties create, post or store any content, messages, materials or other items on Our Site 
      Our Site includes a Product Review feature, and includes or may include in the future, discussion forums, user-generated content or other areas or Services in which You or third parties create, post or store any content, messages, materials or other items on Our Site 
  </p>
        </div>
      </div>
    );
  };
   

export default page
