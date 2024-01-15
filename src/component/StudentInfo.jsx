import Search from "./Search";
import StudentTable from "./StudentTable";

export default function StudentInfo() {
    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28">
            <div className="container">
                <Search />
                <StudentTable />
            </div>
        </section>
    );
}
