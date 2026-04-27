import { useState, useEffect } from 'react';

//2 
const response = {
    page: 1,
    results: [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt remeveniet architecto",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 6,
            title: "kink ferrari",
            body: "jumat jumawa\nsabtu merana\nminggu entah kemana\nabsolute cinema",
            image: "https://pkwerks.com/wp-content/uploads/2022/12/IMG-1-5.jpg",
        },
    ],
};

export default function App() {
    const [count, setCount] = useState(0);
    const [showGif, setShowGif] = useState(false);
    useEffect(() => {
        if (count !== 0 && count % 10 === 0) {
            setShowGif(true);
            alert(`${count} bisa dibagi 10`);
            setTimeout(() => {
                setShowGif(false);
            }, 3000);
        }
    }, [count]);

    return(
        <div> 
            {/*1*/}
            <div className="bg-black text-white">
                <nav className="flex justify-between items-center">
                    <div className="">
                        <b>
                            Danish Al Fayyadh Sunarta
                        </b>
                    </div>

                    <ul className="flex gap-10">
                        <li><a href="https://github.com/codename-alfa" className="">Profile</a></li>
                        <li><a href="https://github.com/codename-alfa" className="">Contact</a></li>
                        <li><a href="https://github.com/codename-alfa" className="">Projects</a></li>
                    </ul>
                </nav>
            </div>

            {/*2*/}
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {response.results.map((item) => (
                        <div key={item.id} className="">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
                            <div className="">
                                <h2 className="">{item.title}</h2>
                                <p className="">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*3*/}
            <div className="p-10 flex flex-col items-center bg-white mt-10 border-t">
                <h1 className="text-4xl font-bold mb-4">Counter Demo</h1>
                <br></br>
                <p className="text-6xl font-mono mb-8 text-[#F70D1A]">{count}</p>
                
                <div className="flex gap-6">
                    <button onClick={() => setCount(count - 1)} className="bg-white px-8 py-3 rounded-xl font-bold text-2xl">
                         - 
                    </button>
                    
                    <button onClick={() => setCount(0)}className="bg-white px-8 py-3 rounded-xl font-bold text-xl">
                         Reset 
                    </button>
                    
                    <button onClick={() => setCount(count + 1)}className="bg-white px-8 py-3 rounded-xl font-bold text-2xl">
                         + 
                    </button>
                </div>
            </div>
            {showGif && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90 transition-opacity" onClick={() => setShowGif(false)}>
                    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW5rMjY2emdrcWUzeGxtMDFkd3NiZ2NkYXoydHpudzVwaGF3c2k1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AWEZg7X5yU47lHriC2/giphy.gif" alt="waspada kebangkitan kink ferrari" className="max-w-full max-h-full object-contain"/>
                </div>
            )}
        </div>
    );
}