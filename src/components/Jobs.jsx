

const Jobs = ({job}) => {
    const {company_img}=job
    return (
        <div>
            <img src={company_img} alt="" />
        </div>
    );
};

export default Jobs;