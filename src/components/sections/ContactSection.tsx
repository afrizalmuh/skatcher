import React from 'react';

const ContactSection: React.FC = () => (
  <section className="bg-white">
    <div className="main-layout grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
      <div className="space-y-6">
        <span className="font-semibold uppercase text-secondary">
          Get in Touch
        </span>
        <h2 className="text-3xl font-bold">
          Let Us Know by Sending Your Message For More Information
        </h2>

        <div className="block md:hidden">
          <div className="h-64 w-full rounded-xl bg-gray-200 md:h-[540px]" />
        </div>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Insert Your E-mail Address Here"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Insert Your Message Here"
              className="mt-1 block h-32 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <button
            type="submit"
            className="hover:bg-secondary-dark w-full rounded-lg bg-secondary py-3 font-semibold text-white transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="hidden md:block">
        <div className="h-64 w-full rounded-xl bg-gray-200 md:h-[560px]" />
      </div>
    </div>
  </section>
);

export default ContactSection;
