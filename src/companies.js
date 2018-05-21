const apple = require('./assets/images/apple-infograph.png');
const uber = require('./assets/images/uber-infograph.jpg');
const ms01 = require('./assets/images/microsoft01.png');
const ms02 = require('./assets/images/microsoft02.png');
const ms03 = require('./assets/images/microsoft03.png');
const deloitte = require('./assets/images/deloitte.png');
export const companies = [
    {
        name: "Apple",
        image: "https://images.unsplash.com/photo-1524046997286-863495b9638e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4928ee2f24958e5af4e2f29461953663&auto=format&fit=crop&w=2090&q=80",
        description: "The Cupertino-based tech giant claims female representation is steadily increasing with a 5 point percent increase in number of women under 30 working at the company since 2014.",
        link: "/companies/apple",
        context: [
            {
                title: "Company Size",
                text: "123,000 employees"
            },
            {
                title: "Active Devices",
                text: "1.3 billion active devices worldwide"
            },
            {
                title: "Most Recent Revenue",
                text: "229.2 billion USD"
            },
            {
                title: "Female Employees",
                text: "38%"
            },
            {
                title: "Male Employees",
                text: "68%"
            },
            {
                title: "Female Employee Increase",
                text: "5% as of 2014"
            }
        ],
        backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Campus_One_Infinite_Loop_Sign.jpg',
        trends: ["The company has a good percent of women in leadership roles. The company says 29% of leaders at Apple are women, a 1 percentage point increase from July 2016 to July 2017. It also says 39% of the company’s leaders under 30 are women with a 3 percentage points increase. From July 2016 to July 2017, half of the company’s new hires in the U.S. included women in addition to people from historically underrepresented groups in tech — women, Black, Hispanic, Native American, and Native Hawaiian & Other Pacific Islander."],
        policies: [
            { "icon": "fal fa-snowflake", "name": "Policy 1", "text": "Does this policy" },
            { "icon": "fal fa-child", "name": "Policy 2", "text": "Does this policy" },
            { "icon": "fal fa-money-bill-alt", "name": "Policy 3", "text": "Does this policy" }
        ],
        infograph: apple,
        conclusion: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },

    {
        name: "Uber",
        image: "https://media.glassdoor.com/l/0e/3b/dd/5c/office-circa-2015.jpg",
        link: "/companies/uber",
        description: "The San Francisco-based ride-sharing company has been marred in controversy over its treatment of women employees, particularly some serious allegations of sexual harassment and gender discrimination. The company’s new CEO says they are “just getting started when it comes to improving diversity and inclusion.“",
        context: [
            {
                title: "Company Size",
                text: "16,000 employees",
            },
            {
                title: "Monthly Users",
                text: "75 Million Riders and 3 million drivers"
            },
            {
                title: "Most Recent Revenue",
                text: "7.5 billion USD",
            },
            {
                title: "Female Employees",
                text: "38%"
            },
            {
                title: "Male Employees",
                text: "62%"
            },
            {
                title: "Female Employee Increase",
                text: "1.9%"
            }
        ],
        backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Protest_against_Uber_-_Budapest%2C_2016.01.18_%282%29.JPG',
        trends: ["Following the expulsion of its previous CEO, the company says they are making significant efforts to make include more women in leadership roles, which they define as any role as director or above. The current CEO, Dara Khosrowshahi, says they celebrate differences at Uber and are committed to building a culture where everyone feels welcomed, supported and challenged. The company has appointed a new Chief Diversity and Inclusion Officer to help create engaging development programs for women.",

        "They have also partnered with several organizations that aim to bring in more women talent to the tech industry, such as Girls Who Code, BUILD, Technovation, Code.org, and SMASH."],
        policies: [
            { "icon": "fal fa-snowflake", "name": "Policy 1", "text": "Does this policy" },
            { "icon": "fal fa-child", "name": "Policy 2", "text": "Does this policy" },
            { "icon": "fal fa-money-bill-alt", "name": "Policy 3", "text": "Does this policy" }
        ],
        infograph: uber,
        conclusion: "Overall, Uber has made efforts to improve its image how it treats its women employees following allegations of sexual harassment and what efforts it is making to bridge the gender gap. The company says they are launching new leadership programs for women beside other underrepresented groups. Two of its Employee Resource Groups are specifically intended for women. These include LadyEng, a community for women in engineering, and Women for Uber, a community for women, gender non-binary employees, and allies.",

    },
    {
        name: "Facebook",
        image: "http://blogger.techmasair.com/wp-content/uploads/2017/04/151027-facebook-headquarters-2-100624904-orig.jpg",

        description: `The social media giant based out of Palo Alto, California has been making efforts to show positive diversity growth`,
        link: "/company/facebook",
    },
    {
        name: "Amazon",
        image: "https://d3pxppq3195xue.cloudfront.net/media/images/16/07/11/CAM_02_F_NBBJ_638x484.jpg",

        description: `One of the world's largest employers, and most disruptive companies with one of the smallest percentage of females in leadership.`,
        link: "/company/amazon",
    },
    {
        name: "Microsoft",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Microsoft_Sign_on_German_campus.jpg",

        description: "Being one of the largest tech companies in the world, Microsoft has over 125,000 employees and engages in the provision of developing and marketing software and hardware services. Microsoft has been striving to reduce the existence of a bias across gender and other minorities.",
        link: "/companies/microsoft",
        context: [
            {
                title: "Company Size",
                text: "124,000 employees"
            },
            {
                title: "Most Recent Revenue",
                text: "89.95 billion USD"
            },
            {
                title: "Female Employees",
                text: "17.5%"
            },
            {
                title: "Male Employees",
                text: "82%"
            },
            {
                title: "Overall Female Employee Increase",
                text: "0.1%"
            },
            {
                title: "Tech Female Employee increase",
                text: "8.4%",
            }
        ],
        backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Microsoft_sign_closeup.jpg/1920px-Microsoft_sign_closeup.jpg',
        trends: ["At Microsoft, despite a positive trend, there is still quite a need to bridge the bias across gender and other minorities across their employees; Of this employee pool, women make up roughly only 25.9% of the total and constitute about 19.0% in tech related fields. In leadership at Microsoft, women only make up about 19.1% leaders and this depicts the existence of the bias when it comes to leadership roles, promotions, and job reviews. Consequently, the company has created a few employee resource groups as networks for women in technology to develop and support female employees at Microsoft through opportunities such as global conferences, networking events, and mentoring called Women at Microsoft. Women at Microsoft also partners with MentorNet, a company that seeks to connect STEM student to mentors in their community. In tandem with renewed hiring policies, Microsoft as a whole, is extensively trying to make inroads to strive against gender biases to make their company more inclusive."],
        policies: [
            { "icon": "fal fa-snowflake", "name": "DigiGirlz Day", "text": "Designed to introduce girls to the career opportunities available in technology fields" },
            { "icon": "fal fa-child", "name": "SitWithMe.org", "text": "To recognize the important role women play in creating future technology" },
            { "icon": "fal fa-money-bill-alt", "name": "WiRL Leadership Summit Sponsorship", "text": "Sponsor 10 women to attend this summit" }
        ],
        infographs: [ms01, ms02, ms03],
        conclusion: "As depicted through these infographics, there is a need for Microsoft as one the world's biggest tech companies to re-evaluate the policies it has employed so far with the goal of achieving greater inroads at tackling the issue of gender bias in the company demographics. Especially in leadership, women in Microsoft should be given a better platform to succeed. The programs of DigiGirlz Day, SitWithMe and WiRL Leadership are good indicators of positive intent from Microsoft; the neccessary first steps in a bid to creating a more equal workspace for women at the company.",
    },
    {
        name: "Deloitte",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/DeloitteToronto4.jpg/2560px-DeloitteToronto4.jpg",
        link: 'companies/deloitte',
        description: "Deloitte is the largest professional services network organization in the world by revenue and number of professionals. Deloitte provides audit, tax, consulting, enterprise risk and financial advisory services with more than 263,900 professionals globally and is a pioneer in tackling gender bias and boasts the best statistics of women contributions across all levels of the firm.",
        context: [
            {
                title: "Company Size",
                text: "263,900 employees"
            },
            {
                title: "Most Recent Revenue",
                text: "38.8 billion USD"
            },
            {
                title: "Female Employees",
                text: "44%"
            },
            {
                title: "Male Employees",
                text: "56%"
            },
            {
                title: "Overall Female Employee Increase",
                text: "1.0%"
            },
        ],
        backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/DeloitteToronto3.jpg/2560px-DeloitteToronto3.jpg',
        trends: ["After researching the extent to which Deloitte’s culture is actually inclusive, the company numbers through the years across all diversity statistics stand out. Deloitte has found a successful way to create and maintain a conducive environment for women and minorities through the years and have the numbers to back it up. Deloitte has been a pioneer with its approach to move away from ERGs and take up inclusion councils which have produced the required results. And the consistency in the importance shown to tackling gender bias makes Deloitte one of the best places to work sans any bias"],
        policies: [
            { "icon": "fal fa-minus-circle", "name": "Dissolving Workplace Affinity Groups", "text": "This shift away from the traditional was driven by new research findings that highlighted that millennials, who make-up the majority (57%) of Deloitte’s employee base, don’t like being clustered or grouped by demographics." },
            { "icon": "fal fa-plus-circle", "name": "Inclusion Councils", "text": "Aims to bring more voices into the conversation, cultivate and harness allies and drive change, that bring white men into the conversation" },
            { "icon": "fal fa-female", "name": "Women in Leadership", "text": "Boasts a vision of increasing women in leadership to at least 30%" }
        ],
        infograph: deloitte,
        conclusion: "In the end, as Deloitte rightly points out, these networks and ERGs divide people up into artificial subgroups and isolate them from the networks of power and influence that are such a key part of how leaders identify and promote people. Hence, Deloitte has adopted the task to educate and convince today’s dominant managerial group that inclusion is good for business. Hence, Deloitte makes for one the most conducive work environments without the burden of bias and are leading the response for the outcall to address the gender bias while maintaining their standard of results.",
    },
]
