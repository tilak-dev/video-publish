import Image from 'next/image';

const HomeAsideLayout = () => {
    const menuItems = [
        { name: 'Home', icon: '/home-icon.png' },
        { name: 'Liked Videos', icon: '/like-icon.png' },
        { name: 'History', icon: '/history-icon.png' },
        { name: 'My Content', icon: '/content-icon.png' },
        { name: 'Collections', icon: '/collections-icon.png' },
        { name: 'Subscribers', icon: '/subscribers-icon.png' },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white h-full  p-4 space-y-6">
            {/* Navigation Options */}
            <div className="space-y-4">
                {menuItems.map((item) => (
                    <div key={item.name} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-700">
                        <div className="">0</div>
                        <span className="text-lg">{item.name}</span>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default HomeAsideLayout;
