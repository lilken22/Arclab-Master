import React from 'react';
import { FaCalendarAlt, FaPersonBooth, FaComment, FaSearch} from 'react-icons/fa';

const BlogSection = ({ article }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3">
            <div className="mb-6">
              <img src="images/image_1.jpg" alt="" className="w-full h-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-3">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </h2>
            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
            <p className="mb-3">Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
            <h2 className="text-2xl font-bold mb-3 mt-5">#2. Creative WordPress Themes</h2>
            <p className="mb-3">Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
            <div className="mb-6">
              <img src="images/image_2.jpg" alt="" className="w-full h-auto" />
            </div>
            <p className="mb-3">Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
            <p className="mb-3">Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
            <p className="mb-3">Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
            <p className="mb-3">Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
            
            <div className="flex flex-wrap space-x-2 my-5">
              <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">Life</a>
              <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">Sport</a>
              <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">Tech</a>
              <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">Travel</a>
            </div>

            <div className="flex items-center p-4 bg-gray-100">
              <div className="mr-4">
                <img src="images/person_1.jpg" alt="Author" className="w-16 h-16 rounded-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">George Washington</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>

            <div className="pt-5 mt-5">
              <h3 className="text-xl font-bold mb-5">6 Comments</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-16 h-16 mr-4">
                    <img src="images/person_1.jpg" alt="Commenter" className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <div className="text-gray-500 text-sm mb-2">January 03, 2019 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <a href="#" className="text-blue-500 text-sm">Reply</a>
                  </div>
                </li>
                <li className="ml-16">
                  <div className="flex">
                    <div className="w-16 h-16 mr-4">
                      <img src="images/person_1.jpg" alt="Commenter" className="rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <div className="text-gray-500 text-sm mb-2">January 03, 2019 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <a href="#" className="text-blue-500 text-sm">Reply</a>
                    </div>
                  </div>
                  <ul className="space-y-4 ml-16">
                    <li className="flex">
                      <div className="w-16 h-16 mr-4">
                        <img src="images/person_1.jpg" alt="Commenter" className="rounded-full" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <div className="text-gray-500 text-sm mb-2">January 03, 2019 at 2:21pm</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                        <a href="#" className="text-blue-500 text-sm">Reply</a>
                      </div>
                    </li>
                    <li className="ml-16">
                      <div className="flex">
                        <div className="w-16 h-16 mr-4">
                          <img src="images/person_1.jpg" alt="Commenter" className="rounded-full" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">John Doe</h3>
                          <div className="text-gray-500 text-sm mb-2">January 03, 2019 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <a href="#" className="text-blue-500 text-sm">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="mt-5 pt-5">
                <h3 className="text-xl font-bold mb-5">Leave a comment</h3>
                <form className="p-5 bg-gray-100">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                    <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                    <input type="url" id="website" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows="5" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">Post Comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="mb-6">
              <form className="relative">
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" placeholder="Type a keyword and hit enter" />
                <button type="submit" className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Category</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:underline">Interior Design <span>(6)</span></a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Exterior Design <span>(8)</span></a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Industrial Design <span>(2)</span></a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Landscape Design <span>(2)</span></a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Popular Articles</h3>
              <div className="flex mb-4">
                <a className="block w-16 h-16 mr-4 bg-cover bg-center" style={{ backgroundImage: 'url(images/image_1.jpg)' }}></a>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1"><a href="#" className="hover:underline">Even the all-powerful Pointing has no control about the blind texts</a></h4>
                  <div className="text-gray-500 text-sm">
                    <div className="flex items-center"><FaCalendarAlt className="mr-2" /> Oct. 04, 2018</div>
                    <div className="flex items-center"><FaPersonBooth className="mr-2" /> Dave Lewis</div>
                    <div className="flex items-center"><FaComment className="mr-2" /> 19</div>
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                <a className="block w-16 h-16 mr-4 bg-cover bg-center" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></a>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1"><a href="#" className="hover:underline">Even the all-powerful Pointing has no control about the blind texts</a></h4>
                  <div className="text-gray-500 text-sm">
                    <div className="flex items-center"><FaCalendarAlt className="mr-2" /> Oct. 04, 2018</div>
                    <div className="flex items-center"><FaPersonBooth className="mr-2" /> Dave Lewis</div>
                    <div className="flex items-center"><FaComment className="mr-2" /> 19</div>
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                <a className="block w-16 h-16 mr-4 bg-cover bg-center" style={{ backgroundImage: 'url(images/image_3.jpg)' }}></a>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1"><a href="#" className="hover:underline">Even the all-powerful Pointing has no control about the blind texts</a></h4>
                  <div className="text-gray-500 text-sm">
                    <div className="flex items-center"><FaCalendarAlt className="mr-2" /> Oct. 04, 2018</div>
                    <div className="flex items-center"><FaPersonBooth className="mr-2" /> Dave Lewis</div>
                    <div className="flex items-center"><FaComment className="mr-2" /> 19</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Tag Cloud</h3>
              <div className="flex flex-wrap">
                <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">House</a>
                <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Office</a>
                <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Land</a>
                <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Building</a>
                <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Table</a>
                <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Interior</a>
                <a href="#" className="bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Exterior</a>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Archives</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:underline">December 2018 <span>(30)</span></a></li>
                <li><a href="#" className="text-gray-700 hover:underline">November 2018 <span>(20)</span></a></li>
                <li><a href="#" className="text-gray-700 hover:underline">September 2018 <span>(6)</span></a></li>
                <li><a href="#" className="text-gray-700 hover:underline">August 2018 <span>(8)</span></a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Paragraph</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
