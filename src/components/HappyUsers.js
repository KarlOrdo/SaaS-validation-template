import { appConfig } from "@/config/app.config";

export default function HappyUsers() {
    return (
        <div className="flex flex-col items-center">
             <div className="avatar-group -space-x-4 mt-9">
                <div className="avatar">
                    <div className="w-9">
                    <img src="/profile1.jpeg" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-9">
                    <img src="/profile2.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-9">
                    <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-9">
                    <img src="/profile3.jpg" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-9">
                    <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-9">
                    <img src="/profile4.jpg" />
                    </div>
                </div>
                
            </div>
            <p className="text-sm">Loved by <strong>1,991</strong> {appConfig.landing.targetedUser}</p>
        </div>
    );
}