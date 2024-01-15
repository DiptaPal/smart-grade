import { Fragment } from "react";
import data from "../assets/data.json";

export default function StudentTable() {
    return (
        <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-[#FFFFFF0D]">
                        <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                            ID
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold text-left">
                            Name
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold">
                            Scores
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold">
                            Percentage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.classes.map((room) => (
                        <Fragment key={room.id}>
                            <tr className="bg-white/5">
                                <td
                                    className="p-5 text-sm md:text-xl"
                                    colSpan="4"
                                >
                                    {room.class_name}
                                </td>
                            </tr>
                            {room.students.map((student) => (
                                <tr
                                    key={student.id}
                                    className="border-b border-[#FFFFFF0D]"
                                >
                                    <td className="p-5 text-sm md:text-xl">
                                        {student.student_id}
                                    </td>
                                    <td className="p-5 text-sm md:text-xl">
                                        <div className="flex space-x-3 items-center">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={student.image_url}
                                                width="32"
                                                height="32"
                                                alt="John Smith"
                                            />
                                            <span className="whitespace-nowrap">
                                                {student.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-sm md:text-xl text-center">
                                        {student.scores}
                                    </td>
                                    <td className="p-5 text-sm md:text-xl text-center">
                                        {student.percentage}%
                                    </td>
                                </tr>
                            ))}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
