import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

function Bio() {
    const [task, setTask] = useState(true);
    const [loadingTask, setLoadingTask] = useState(false);
    const [loadingAddBio, setLoadingAddBio] = useState(false); // New loading state for adding bio
    const [bio, setBio] = useState(''); // State to hold the bio input
    const maxChars = 101; // Maximum characters allowed

    const handleAddBio = () => {
        setLoadingAddBio(true);
        // Simulate a loading time for adding bio
        setTimeout(() => {
            setLoadingAddBio(false);
            setTask(false); // Proceed to show the textarea
        }, 2000); // Simulate a 2-second loading time
    };

    const handleSave = () => {
        setLoadingTask(true);
        // Simulate a save operation
        setTimeout(() => {
            // After saving, reset the state
            setLoadingTask(false);
            setTask(true);
            setBio(''); // Clear the textarea
        }, 2000); // Simulate a 2-second loading time
    };

    return (
        <div>
            <h5 className="text-[1.3rem] font-semibold mb-[1rem]">Giới thiệu</h5>
            {task ? (
                <Button
                    className="w-[100%] mb-[.5rem]"
                    onClick={handleAddBio}
                    disabled={loadingAddBio} // Disable button while loading
                >
                    {loadingAddBio ? 'Đang tải...' : 'Thêm tiểu sử'}
                </Button>
            ) : (
                <div>
                    <Textarea
                        placeholder="Mời bạn nhập tiểu sử"
                        className='bg-zinc-700 border border-zinc-600'
                        value={bio}
                        onChange={(e) => setBio(e.target.value)} // Update bio state on change
                    />
                    <div className='text-[.75rem] text-right mt-[.5rem] text-zinc-500'>
                        Còn {maxChars - bio.length} kí tự
                    </div>
                    <div className="flex justify-end gap-[.5rem] mb-[1rem]">
                        <Button
                            onClick={() => {
                                setTask(true);
                                setBio(''); // Clear the textarea when canceled
                            }}
                            className='bg-zinc-700 border border-zinc-600 h-[30px] w-[50px] hover:bg-zinc-600'
                        >
                            Hủy
                        </Button>

                        <Button
                            onClick={handleSave}
                            disabled={bio.length === 0 || loadingTask} // Disable if bio is empty or loading
                            className='bg-zinc-700 border border-zinc-600 h-[30px] w-[50px]'
                        >
                            {loadingTask ? 'Đang lưu...' : 'Lưu'}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Bio;