/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { contacts } from "../data/contacts.js";

export default function ContactCard() {
  return (
    <div
      id="contactList"
      className="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Company Representatives
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Feel free to reach out our contact persons.
          </p>
        </div>
        {/* <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"> */}

        <div className="mt-12">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {contacts.map((person) => (
              <li
                key={person.email}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {person.name}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">{person.title}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {person.role}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        <MailIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Email</span>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                      >
                        <PhoneIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
