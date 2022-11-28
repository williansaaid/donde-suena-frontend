import React from 'react'

export const PostDumb = ({posteos}) => {
    
    return (
        <div>
            {posteos &&
                posteos?.map((el) => {
                    return (
                        <div className="min h-50 bg-gray-200 flex items-center justify-center">
                            <div className=" mt-5 w-3/4  mx-auto rounded-lg bg-white shadow p-5 text-gray-800flex bg-white shadow-lg rounded-lg mb-12 md:max-w-2xl ">
                                <div className="w-full flex mb-4">
                                    <img
                                        class="w-12 h-12 rounded-full object-cover 
                                  shadow"
                                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        alt="avatar"
                                    />
                                    <div className="grid-rows-{2}">
                                        <div className="flex-grow pl-3 mr-10">
                                            <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                                                {el.title}
                                            </h2>

                                            <div className="w-full mb-4">
                                                <p className="mt-3 text-gray-700 text-sm ml-3">
                                                    {el.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full  mr-70">
                                        <p class="text-xs text-gray-500 text-right">
                                            Oct 15th 8:33pm
                                        </p>
                                    </div>
                                    {/* <img
                                                src={el.image ? el.image : ""}
                                                alt=""
                                                width="200"
                                                height="100"
                                            />
 */}

                                    {/* artist={el.artist} */}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default PostDumb