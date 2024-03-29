import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  tab_faqs = [
    {
      id: "general",
      active: true,
      faq_content: [
        {
          id: "general",
          title: "Orders <br>& Shipping",
          accordions: [
          {
              id: "478",
              show: true,
              title: "Linda Cartee",
              desc: "I just want to thank you all who worked on my case.&nbsp; Although it is bittersweet, I am very pleased with my settlement.&nbsp; Everyone I’ve had the pleasure of talking to has been very professional, yet personable as well.&nbsp; I feel like I couldn’t have chosen a better group.&nbsp; I highly recommend your fir to anyone needing this type of legal assistance.&nbsp; Again, thank you!",
              parent: "general-1_accordion",
          },
          {
              id: "420",
              title: "Millicent Y. Truesdale",
              desc: "<p>First want to say thank you so much for the years of service in my Pop’s (Leroy F. Peck) case.&nbsp; If I could trade this money for just one more day with my Pop’s, I would.&nbsp; I miss him so much.&nbsp; I know he’s in a much better place than I, away from pain beyond description.&nbsp; I am a little Daddy’s girl and forever will be just that.</p><p>Your company went well and beyond expectation, that I can’t say thank you enough for the closure.&nbsp; Now I can begin to heal a little better and rest easier because I can finally put this chapter of heartache to an end.</p><p>This year for my Pop’s birthday I hope to be celebrating it at the mountains.&nbsp; The only thing on his bucket list we didn’t do together, but it’s okay in spirit he will be there with me.&nbsp; Bless you and all associates at Wallace &amp; Graham.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "419",
              title: "Ned H. Price",
              desc: "<p>Over the past twenty years, Wallace and Graham have helped me with the asbestos and workers’ compensation claims.&nbsp; Everyone at the law office has been professional, friendly and helpful, especially Amanda. &nbsp;She has gone out of her way to keep me updated on the details of my case.&nbsp; I thank you all for your aid with my claim and the claims of my fellow Dayco workers.&nbsp; I have already and will continue to recommend their services.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "488",
              title: "Ainslee Gentry Moss",
              desc: "When my dad began his workers’ compensation claim with Wallace and Graham due to failing health from chemical exposure, little did we know he would pass away from cancer within two years.&nbsp; Wallace and Graham helped our family finish the journey and was able to get us monies which covered his funeral expenses and more.&nbsp; They guided us each step of the way with very professional staff.&nbsp; I highly recommend them!",
              parent: "general-1_accordion",
          },

          {
              id: "392",
              title: "Al",
              desc: "<p>Thank You, Wallace &amp; Graham for all of the support and hard work you have given to me and my family all these years.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "453",
              title: "Amanda Jill Shaw",
              desc: "All I can say is that I wish Jack and Shelby were here to receive this.&nbsp; I know they would be very grateful for all the hard work that Wallace and Graham put in getting his workers’ compensation claim settled.&nbsp; I want to personally thank you on advising me after Shelby passed.&nbsp; I had no idea on how this was going to be handled.&nbsp; This all has been very emotional for me.&nbsp; Thank you for making this easy on me.",
              parent: "general-1_accordion",
          },

          {
              id: "113",
              title: "Annie",
              desc: "Dear Mrs. Wallace, Thank you for taking time out of your busy schedule to call me Saturday to discuss my husband's case. I was shocked to know that you were STILL working on my behalf. I am amazed and still amazed!In life, there are many paths you can take and many people who share the journey -- but it is the special people who help you along the way, and the most important people who care enough to give of themselves unconditionally. Thank you for being one of these special people. I also say this for Attorney Graham and staff. ",
              parent: "general-1_accordion",
          },

          {
              id: "132",
              title: "Annie",
              desc: "<p>Wallace &amp; Graham is an excellent and very professional law firm. The attorneys did an outstanding job of negotiating my case with other insurance companies and keeping me informed of the progress.The paralegals were friendly and very eager to assist me. I will definitely recommend, without reservation, Wallace &amp; Graham law firm to all my friends and family members.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "416",
              title: "Annie B. Redmon",
              desc: "<p>I would like to personally thank you for everything you have done for myself and my late husband over the years.&nbsp; The hard work and dedication you have showed does not go unnoticed.&nbsp; I am grateful for your consistent efforts to ensure that my husband and I got the justice that we deserved.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "153",
              title: "Anonymous",
              desc: "Special thanks to Whitney Wallace for assisting me with my workers compensation claim. Whitney and her paralegal, Megan, were patient and understanding. They stayed on top of any issues and assisted me through the entire process. Whitney reassured me that it was ok to seek the benefits that I was entitled to receive. The dedication and hard work of Whitney and Megan resulted in a settlement that I am very grateful to have received. ",
              parent: "general-1_accordion",
          },

          {
              id: "345",
              title: "Anthony",
              desc: "<p>Whitney &amp; Megan did the most amazing job I could ever ask for handling my case. Not only in handling my case, but also in making sure me &amp; my family were being taken care of and was alright. I couldn’t have asked for a better attorney to handle this case for me. Me and my fiancé and my daughter were truly blessed to have Whitney fighting for us. And even though I walk away with issues from incident at former employers, Whitney did everything possible that she could to make sure I was taken care of forever. It was a true blessing to have ever met her and have her represent me. I am truly thankful. – Ant</p>",
              parent: "general-1_accordion",
          },

          {
              id: "100",
              title: "Barbara",
              desc: "Thank you as always Krystal for all you do and continue to do for us! The entire office/company rocks! Very appreciative to you all.",
              parent: "general-1_accordion",
          },

          {
              id: "111",
              title: "Barbara",
              desc: "<p>I would like to thank you so much for doing all you are doing for me. I wish my husband was here with me. I miss him so much. He is my rock and solemate forever. He would thank you too!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "125",
              title: "Barbara",
              desc: "Mesothelioma is a devastating disease. Wallace &amp; Graham not only made sure my family did not have to worry about the financial burden created by the disease, but also helped us address the myriad of daily living and healthcare challenges that accompany this diagnosis. Their assistance went far beyond just dollars and cents as they provided a comprehensive support system that included access to the best healthcare available. Wallace &amp; Graham has outstanding legal expertise and experience, but perhaps more importantly, they demonstrate true empathy and caring for their clients. ",
              parent: "general-1_accordion",
          },

          {
              id: "394",
              title: "Betty",
              desc: "<p>Thanks to all of you for what you have done for me and my family since the death of my husband.&nbsp; Wishing you all the best of holidays this year.&nbsp; Sincerely, Betty Hammontree</p>",
              parent: "general-1_accordion",
          },

          {
              id: "417",
              title: "Betty Ricker Risner",
              desc: "<p>I have been working with Wallace &amp; Graham since late 90s.&nbsp; When my husband William Risner passed Nov. 24, 2001, they have been super to find any &amp; all funds that are due me being a widow.&nbsp; Not only are they wonderful people, but all their staff.&nbsp;</p><p>My husband passed from asbestos &amp; small cell carcinoma.&nbsp; Since then they have worked to settle all claims related to the illness.&nbsp; This has taken several years &amp; I appreciate their time and effort.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "106",
              title: "Bill",
              desc: "I just wanted to tell you I appreciate all that you have done for me. Thanks again. ",
              parent: "general-1_accordion",
          },

          {
              id: "390",
              title: "Bisalla",
              desc: "I am so happy to have chosen Wallace &amp; Graham as my attorneys for my On The Job Injury (OJI). I am particularly glad that Tiffany Mack was assigned to defend and process my case. I am satisfied with the settlement and certainly recommend other clients to use the services of Wallace &amp; Graham attorneys.",
              parent: "general-1_accordion",
          },

          {
              id: "123",
              title: "Bob",
              desc: "Thank you Whitney for all the time, phone calls, and emails that you blessed us with. ",
              parent: "general-1_accordion",
          },

          {
              id: "366",
              title: "Bruce Rhyne",
              desc: "<p>I am so pleased and happy with Mark Doby as my attorney. He has been I my corner with Asbestos, leukemia, dealing with my Ins. Folks while I’ve been on my death bed. He’s released me from the stress of my sickness. He continues to be in my corner. Thank you for your support and providing me with Mark. I cannot tell you how pleased me and my family are. Please make sure Mona Lisa and Bill see this note. I’ve been so sick and I do thank y’all so much.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "450",
              title: "Chancie M. Pryor",
              desc: "<p>Dear Wallace &amp; Graham, P.A., Attorneys At Law, Associates, Staff and Receptionist:</p><p>&nbsp;</p><p>I, Chancie M. Pryor and family, are so privileged and thankful for your help, support and the time well spent of your care and concern on my behalf concerning&nbsp;<strong>my workers’ compensation claim</strong>.&nbsp; I would like to commend your sound knowledge, skills and courtesy in your field.&nbsp; Your stood by me through and through and we value your principles of honest, integrity and clear explanations.&nbsp; Do know that whenever I need any legal help of any legal matters, you will be my first choice.&nbsp; I will gladly recommend you to all my extended family, friends and associates.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "95",
              title: "Charles",
              desc: "Thank you Wallace and Graham for a very wonderful Christmas present. God Bless!",
              parent: "general-1_accordion",
          },

          {
              id: "107",
              title: "Charles",
              desc: "I want to thank every one at Wallace and Graham, this means so much to me. God Bless. ",
              parent: "general-1_accordion",
          },

          {
              id: "134",
              title: "Charles",
              desc: "Wallace &amp; Graham litigated two compensation cases for me and they explained my rights under the workers compensation laws and what I was entitled to.Wallace &amp; Graham assisted my other legal matters through an associate named Cindy Cobble, who always directed me to someone to help me. Wallace &amp; Graham is not just my law firm there are my friends as well. I would recommend them to any and all my family, friends and associates.",
              parent: "general-1_accordion",
          },

          {
              id: "121",
              title: "Chuck Williams",
              desc: "After being told by 3 Doctors that you have Stage 4 terminal cancer no matter what you were doing in life it suddenly goes into shock, hurt, fear and disbelief. Although, I am 62 and was trying to continue to work 40 hours a week, I was missing 20 or more days due to chemo and radiation treatments or being too sick to work. After talking to the Social Security Administration and hearing about the 'paper work',  'interviews' and 'filings', it was overwhelming  to me.  So,  I contacted Mark Doby at Wallace &amp; Graham Law Firm in Salisbury. He my interview with a Disability Examiner and had my paperwork filed on August 1, 2014. On August 19th, 2014 I received notification that Social Security had approved my disability effective August 15, 2014. Thats just 2 weeks! Thank you Mark and all of the staff at Wallace &amp; Graham for making my remaining life a lot less stressful!Carl R. Williams Jr.Salisbury,N.C.",
              parent: "general-1_accordion",
          },

          {
              id: "150",
              title: "Claudette",
              desc: "<p>Whitney is not only my lawyer, she has grown to be my friend. I think of the law firm as my family. If something didn’t go right, all I had to do was call and Whitney and Megan would get it handled for me. Whitney didn’t settle for the first offer from the defendant, but took the time to make sure that it would benefit me too.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "108",
              title: "Daisy",
              desc: "<p>Thanks for everything this firm has done for us!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "421",
              title: "Daisy M. Hollars",
              desc: "<p>Wallace &amp; Graham has been very helpful to us over the years regarding my late husband’s claims for his asbestos exposure. Everyone that we have dealt with have been very professional, kind, and efficient.&nbsp; I would recommend them to anyone who has been exposed to harmful substances such as my husband was.&nbsp; Thank you so much for your help through the years.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "449",
              title: "Dale Waller Covington",
              desc: "<p>I am so thankful we chose Wallace and Graham to handle our case.&nbsp; Many thanks to Ed, Amanda, Mike, Coryna and others who worked diligently for us on my father’s workers’ compensation claim.&nbsp; You were always so kind to us and willing to answer all our questions so we could understand this process.</p><p>&nbsp;</p><p>Thank you again for all your hard work.</p><p>&nbsp;</p><p>God Bless,</p><p>Dale Waller Covington</p><p>Daughter of Bobby Gene Waller (D)</p>",
              parent: "general-1_accordion",
          },

          {
              id: "462",
              title: "Dan Helton",
              desc: "Without exception, Wallace and Graham is the best law firm I've ever dealt with. Everyone was polite, professional, responsive, and knew their part in the process. They have no phone-a-rama. A real person answers the phone, who, by the way, has the most beautiful, calming voice I've heard in a long time. I was always transferred to the correct person the first time. Whitney [Wallace Williams] and her staff were very thorough and patient. They involved the right people, at the right time, which was evident by the results. The experts they involved also actually helped mitigate the health effects resulting from years of working rotating shifts. If all personal injury attorneys took the same interest in the wellbeing of their clients, large companies would soon be forced to truly look after the health of their employees, instead of just giving it 'lip-service'. Many thanks to the entire team.",
              parent: "general-1_accordion",
          },

          {
              id: "154",
              title: "David",
              desc: "I recently received a $270 check from Wallace &amp; Graham for workers' comp reimbursement for some of the costs that were deducted from my settlement.  I wanted to take the time to thank you for your efforts on my behalf.  What a better time than during the Christmas Season to find unexpected income.Thanks so much for all you and your team do at Wallace &amp; Graham.",
              parent: "general-1_accordion",
          },

          {
              id: "145",
              title: "Davis",
              desc: "Wallace &amp; Graham worked for me for my best interest against insurance companies. It took a long time to settle with the insurance companies, but in the end it was worth the wait. At times it was Ed Pauley up against five insurance lawyers. But, Ed all ways came out on top. No layer could have done the job Wallace &amp; Graham done for me. I have told lots of people about Wallace &amp; Graham. You cannot do better. You can call me anytime I will tell anybody you are the best. I am really glad to talk and visit all of you at the office.Thank you for letting me tell what you all mean to me. ",
              parent: "general-1_accordion",
          },

          {
              id: "151",
              title: "Deborah",
              desc: "<p>Our family was in need of legal help in 1993. I watched a very professional process with deep concern for my mother’s wrong doing from a large corporation. Mona Wallace fought for my mother’s case and won. In 2009, when I was in need of a very professional attorney, without a doubt, Wallace &amp; Graham was my choice. Whitney Wallace and Megan Hinson are experienced with the workers’ compensation process. It is a wonderful relief to know someone cares and is willing to fight so hard for my rights. It is also a pleasure to work with the professional staff at Wallace &amp; Graham.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "479",
              title: "Diane Wilson",
              desc: "My father started his workers’ compensation claim before he passed away.&nbsp; The Wallace &amp; Graham Team was very compassionate and understanding when I called to let them know that he was deceased.&nbsp; The team was very easy to talk with and the transition was smooth, the case picked up where it was left off with dealing with my father.&nbsp; The Wallace &amp; Graham Team is very confident with the type of cases in which they are experienced in dealing with.&nbsp; I would personally recommend Wallace &amp; Graham to settle a claim of this nature.&nbsp; There are not enough words to express how I feel about this group.<p>&nbsp;</p><p>Sincerely,</p><p>Diane Wilson, Daughter of Herbert Eugene Allison</p>",
              parent: "general-1_accordion",
          },

          {
              id: "129",
              title: "Donald",
              desc: "<p>Cathy Williams, Ed Pauley, Stephanie Kafitz and their support staff were superior in representing my best interest in my workers comp case. Cathy and Ed were always readily available by phone to discuss any issues. I never had to play “phone tag” that is so common today.I was especially impressed with Cathy’s extensive research and follow-up with many doctors regarding the damages welding does to the eyes. Ed’s amazing knowledge of asbestosis and his “don't give up” encouragement can’t be matched!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "455",
              title: "Donald Whitford Waters",
              desc: "<p>Thanks to the Wallace &amp; Graham Attorneys at Law for first taking my workman’s compensation case, second for all their hard work bringing it to a close.&nbsp; I highly recommend their firm for this type of settlement.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "146",
              title: "Donnie",
              desc: "Donnie and I feel fortunate to work with the law firm of Wallace &amp; Graham. This is a team second to none which is professional in approach, courteous in demeanor and always displays sensitivity for their client’s needs.The amount of time and effort solely devoted to our claim making sure we were rightfully compensated for exceeded our expectations. We will recommend the law firm of Wallace &amp; Graham above any other law firm. ",
              parent: "general-1_accordion",
          },

          {
              id: "489",
              title: "Elaine Ray Davis",
              desc: "I would like to thank all the people who worked on my case.&nbsp; Mr. Pauley, Amanda Norton and all the rest.&nbsp; I had heard so many good things about Wallace and Graham, PA and now that they have helped me on my workers’ compensation case,&nbsp;I see for myself what a number one class action establishment of attorneys they are.&nbsp; Nothing but good comments!&nbsp; They keep you informed if you don’t understand something and they do what they say they’ll do!&nbsp; I give them five stars.",
              parent: "general-1_accordion",
          },

          {
              id: "119",
              title: "Elisha",
              desc: "<p>Whitney and Megan have been wonderful over the past 2 years. They both have taken time out of their busy schedules to answer any questions, comments or concerns. I would be glad to have them on my side again if I ever needed. In my opinion you can't go wrong with this team.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "126",
              title: "Fred",
              desc: "Wallace &amp; Graham fought for my best interest against the company. They took their time and tried to help me understand the process and what I was entitled to under the law. I would recommend Wallace &amp; Graham to others with legal needs. Megan and Whitney made this seem easy when I know it was difficult. ",
              parent: "general-1_accordion",
          },

          {
              id: "414",
              title: "Gilbert Alexander Miller",
              desc: "<p>I was gratefully pleased and surprised by the promptness and effectiveness in all matters concerning multiple cases that Wallace &amp; Graham was able to bring to fruition.&nbsp; Amanda and the rest of the staff covered by downfalls and forgetfulness and made sense out of my chaos.&nbsp; Ed Pauley kept me informed on matters and I feel maximized the outcome for equitable settlements.&nbsp; Highly grateful for all the work performed.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "461",
              title: "Glen Hayes",
              desc: "I feel that Whitney [Wallace Williams] and her team did a remarkable job for me on this case. Thanks Whitney and staff!",
              parent: "general-1_accordion",
          },

          {
              id: "98",
              title: "Glenn",
              desc: "To Mr. Graham and Mona Lisa and all of the staff thank you so much for the check i received today, It sure came in handy with my medicine being so expensive. Ive really enjoyed your firm and have no complaints, god bless all of you. ",
              parent: "general-1_accordion",
          },

          {
              id: "97",
              title: "Greg",
              desc: "I had a great experience with the group. Both Meagan and Whitney have done a great job. Very happy they took my case and helped us get through everything over the last 5 years. Great job to everyone!",
              parent: "general-1_accordion",
          },

          {
              id: "114",
              title: "Gwen",
              desc: "We just want to express our appreciation for all your efforts on our behalf. You have helped make a huge positive in our lives! ",
              parent: "general-1_accordion",
          },

          {
              id: "490",
              title: "Hattie Lou Smith",
              desc: "To the Wallace and Graham firm, I am pleased with the handling of my workers’ compensation case. Thank you for keeping me informed. I would use your firm and would recommend you to someone else. Again, thank you so much for all you did. I am humble and thank God for each one that were involved.",
              parent: "general-1_accordion",
          },

          {
              id: "135",
              title: "Howard",
              desc: "Wallace &amp; Graham law firm has gone far beyond my needs to help me with my legal concerns. From the first day I walked into their office, I was greeted by two of the nicest ladies at their front desk. These ladies made my wife and I feel totally welcomed and interested in our needs.I came here with workers comp questions and Whitney Wallace took my case. She greeted us and we felt like part of their family. Whitney was always there to answer all my questions. Please call Whitney if you have any worker comp concerns.I was also having hearing problems and Mark Doby started asking concerning questions and before I left there he was filing a hearing claim. He was awesome with my hearing claim. After years of not hearing well, he got me hearing aids and more. Thank you Mark for all the hard work you did for me!My wife and I would also like to thank Megan Hinson who handles all of our in between questions during our claims, you are the best! You were always there when we needed someone.If ever in need of a good lawyer, please contact Wallace &amp; Graham law firm.They are the best! We love you guys! ",
              parent: "general-1_accordion",
          },

          {
              id: "131",
              title: "Ivan",
              desc: "<p>Wallace &amp; Graham is the best law firm in the country. I have been a client of their office for several years and always have gotten positive results. Mark Doby handled my disability case and had been turned down twice by Social Security and Mark went with me to the hearing and was approved immediately – Mark Doby did an excellent job for me. Ed Pawley has always helped me and my family on several cases and always 100% complete satisfaction. Ed has never lost a case for us. Both of these attorneys are not only attorneys but friends as well.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "101",
              title: "James",
              desc: "<p>Thanks for everything and have a blessed day.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "120",
              title: "James",
              desc: "<p>I would like to thank you very much for all the help ou have given me during my time of need. I think it started about three years ago, I didn't no if I could get anything for workers' compensation or not, but both of you [Mark Doby &amp; Frieda Willett], started right on it. I have been very satisfied with everything. Frieda and Mark you have help me so very much, I say thank you, thank you very much from my heart. My wife says thank you also, again I say I have been very satisfied client of Wallace &amp; Graham. If I need someone later on I know who to call. May God bless both of you.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "139",
              title: "James",
              desc: "<p>It is my belief the Wallace &amp; Graham is a good choice for legal counsel. I have been lucky to have found a legal team that is solid in there foundation. My family had the unfortunate cause of having to find legal counsel for a fatal crash involving my father back in March 2013. He was killed by another driver while riding his motorcycle. The crash was not his fault. When my family and I first approached the Wallace &amp; Graham team they were upfront and forth wright about the reality's we would be facing in the case. To this day they have not been found to have steered us in the wrong direction or have spoken falsities. We are treated as we are family. They were diligent and kept us informed regularly as things had changed or not. If there was something that was not a good decision to be made. We were told about it out front whether we liked it or not. This is a rare reality in this world now. If it were not for being blessed to have found or being referred to Wallace &amp; Graham as legal counsel, I am sure that I would have lost my mind months ago with the train wreck that is my Father's crash. The legal counsel that is the state is not as efficient, caring, fourth wright or honoring toward the victim's family as true professionals should be. As the Wallace &amp; Graham Team is. I will be following up with them on other matters in the near future. In closing. It is my opinion and belief that it would be a smart decision for anyone to make, as to seek and acquire the team of Wallace &amp; Graham as their legal counsel. In my first experience with them, you will not regret it.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "152",
              title: "James",
              desc: "<p>I never thought I would have success in my workers’ compensation case, but Wallace &amp; Graham really helped me. I was very happy with the results we got and Ed and Trish did a great job. They treated me like I was their number one client. They never gave up.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "491",
              title: "Janet H. Greene",
              desc: "<p>It is difficult to be thankful for the payment of a worker’s compensation claim when a loved one has lost his life.&nbsp; However, my family and I are grateful for the professional and compassionate way our claim was handled by the staff at Wallace and Graham.&nbsp; Everyone was always available to walk us through the process and answer any questions.Thank you again.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "451",
              title: "Janet M. Finley",
              desc: "I want to thank Ed and Amanda for all your support and help over the years.&nbsp; It has been a very difficult time and with your help you made it easy.&nbsp; If I had questions about Mark’s workers’ compensation claim, you were always there to answer them.&nbsp; I will always appreciate your kindness and support throughout this.&nbsp; Thank you so much for everything.&nbsp; Thank you for being so kind to Mark.",
              parent: "general-1_accordion",
          },

          {
              id: "118",
              title: "Jeannette Price",
              desc: "An accident can happen in a blink of a eye, no matter how experienced or alert you may be, but remember the company or insurance people will never let you forget it's your fault. I felt they were rushing me back to work and I was just a number not the employee they hired me to be. When I called Wallace &amp; Graham, I was at my highest level of stress next to depression, my health was very weak and I was mentally drain. When Wallace &amp; Graham took my case I felt like a part of Wallace &amp; Graham family, I was protected. They were knowledgeable and very professional. There staff was very polite, helpful, outgoing, basically they took care of me. My family and I are forever thankful for Whitney and Megan's help.",
              parent: "general-1_accordion",
          },

          {
              id: "138",
              title: "Jeremy",
              desc: "Wallace &amp; Graham successfully fought my case against many manufacturers and insurance companies. Many thanks to attorney Mike Pross, paralegal Beth Ousley, and the staff and complete support of this highly professional firm. I would highly recommend this firm for all your legal needs. Put a winning team on your side - a team from Wallace &amp; Graham.Thanks! ",
              parent: "general-1_accordion",
          },

          {
              id: "412",
              title: "Jerry McLaughlin",
              desc: "<p>This has been one long hard battle and no one else would have put up with this workers comp case this long with such heartfelt compassion.&nbsp; In fact I had two firms before you here in Salisbury – one I fired and one fired me!&nbsp; But I came to you with a very hard case with multiple injuries and you have stayed with me and we finally end this journey with a huge win!!! Thank you.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "112",
              title: "Jill",
              desc: "Dear Wallace and Graham, Just saying thank you is not enough to express what I feel in my heart for all you and your staff of many im sure have done for us. I can't imagine all the research, phone calls, court duties, and endless hours of hard work that has been done over the last several years. Im saying thank you with true feelings. May God bless you and have a wonderful holiday. ",
              parent: "general-1_accordion",
          },

          {
              id: "104",
              title: "Jillian",
              desc: "Thank you for your support. ",
              parent: "general-1_accordion",
          },

          {
              id: "391",
              title: "Joel Jessup",
              desc: "Dear Wallace &amp; Graham, I just wanted to say thank you for all the effort and persistent in filing all the claims over the years.  I think it was 2001 when I got my first settlement check, and each year since there has been additional settlements.  I appreciate the work your office has done to help out so many asbestos workers, and communicate frequently important issues that are in litigation.  You guys are the best! Sincerely, Joel Jessup",
              parent: "general-1_accordion",
          },

          {
              id: "103",
              title: "John",
              desc: "I want to thank Wallace and Graham for looking out for their clients.Thanks Bill. ",
              parent: "general-1_accordion",
          },

          {
              id: "395",
              title: "John Craven",
              desc: "<p>It's a shame that in this day and time that employer's of business, companies and Corporations still have disregard for the safety and well-being of their employees, but the truth and cold hard facts of this is reality. My hope is that this review of Wallace and Graham Law Firm will open people's eyes and ears if you are a victim of negligence and neglect of such.</p><p>&nbsp;</p><p>When faced with a work related injury or illness it is a can be a very dark event and time for someone it can also be taxing on your mind,body, and spirit not to mention financially, you need a light to guide you, you need a voice to be heard, you need a firm that will strap on armor and go to war against a Goliath a firm that will not waver or falter not just take some meager fare payout to make you go away.From the moment I contacted them the professionalism of all involved was immeasurable. Always treated as if my case was the only one that mattered, from the numerous trips they made to my house, to discussions in detail of what my case entailed, every question answered, every plan, process, procedure, signed paper was explained into depth, always kept updated and informed of what was being done, where the case was headed and what the next step would be, what to look for in every aspect of my case. Everyone from bottom to top always treated me with the upmost respect and importance.</p><p>&nbsp;</p><p>There is no measure of gratitude to the team of Ed Pauley and Trish McDermott and all others involved that expresses my feeling there are no more capable mind's or hand's that could handle and succeed with any case.Don't be deceived with other law firms empty promises and smoke and mirror tactics with their ambulance chasing advertising.Wallace and Graham let's their past proven track record provide the proof and their reputation speaks volumes for itself and their results.If you are facing a life changing decision of what to do or who to turn to concerning employer Negligence and neglect to your health and well-being I urge strongly to give Wallace and Graham a call let them put certainty into an uncertain state of mind.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "413",
              title: "John D. Yandel",
              desc: "<p>I am grateful for your tireless work on my behalf and send my sincere thanks. You were always patient with my questions and efficient and courteous with your answers.There was a Medicare lien filed against our settlement and you worked “over and above” to get a good resolution for us. The money got us out of credit card debt and left some in the bank for rainy days!I send my appreciation to everyone who worked on my claim.Sincerely,John D. Yandel</p>",
              parent: "general-1_accordion",
          },

          {
              id: "148",
              title: "Johnny",
              desc: "<p>I contacted Wallace &amp; Graham and spoke with Whitney Wallace. She made me feel very comfortable when talking with her. She explained to me the things I needed to know to go forward with my case. She was very helpful and that’s why I went with Wallace &amp; Graham. Whitney and everyone at the firm has been great. I would recommend Wallace &amp; Graham to all that needed legal help. In my personal case I will be glad when it’s over, but I know cases take time, and I have time because Wallace &amp; Graham gave me their time. Thank you.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "142",
              title: "Josh",
              desc: "Wallace &amp; Graham have been there for me every time I needed them. They help me understand the Social Security Disability process and won my case. Whitney and Megan continue to be there for me through my workers compensation case, answering any questions I have. They are not only handling my case but are working with other family members of mine, and we all love the job they are doing for us.Thanks Whitney and Megan. Y'all are a great team.",
              parent: "general-1_accordion",
          },

          {
              id: "418",
              title: "Judith R. Pettigrew",
              desc: "<p>In 2008, my husband was diagnosed with lung cancer that resulted in having his left lung removed.&nbsp; In 2009 while he was having chemo for his lung cancer due to asbestos, he decided to call Wallace &amp; Graham based on the advice of a co-worker. &nbsp;My husband had told me prior to his lung cancer diagnosis that he would never take that step to make that call due to loyalty to his employer. But we are so thankful he did.&nbsp;</p><p>Thank you for your team who stayed on the journey even after my husband was gone fighting for any compensation due to the awful effects of asbestos.&nbsp; I know you lost a team member too, Mike Pross.&nbsp; Losing someone like Mike was so devastating.&nbsp;</p><p>Many thanks to Ed, Coryna and Amanda for all you have done to not letting up on the claims on behalf of John and his family.&nbsp; I realize now that it takes special people to work diligently when helping clients file these claims.&nbsp; You stayed the course and I thank you.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "94",
              title: "Justin",
              desc: "Whitney and Megan were great! If I ever need a lawyer again I will definitley come back to the firm. ",
              parent: "general-1_accordion",
          },

          {
              id: "405",
              title: "Kelly C. Almond",
              desc: "<p>I would like to express my sincere appreciation to this law firm.&nbsp; Words can’t express how grateful I am for their support, empathy and polite conversations.&nbsp; They listened to me and I am overwhelmed by their generosity!&nbsp; They showed a great concern for me during a difficult time.&nbsp; They were very knowledgeable with the case and helped me understand it all.&nbsp; I will forever be grateful and highly recommend them if you need to be represented.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "109",
              title: "Kirby",
              desc: "Thank you Whitney for all the time and phone calls, and e-mail, that you blessed Bob and I with (I thank you Jesus). This is a small token of appreciation. ",
              parent: "general-1_accordion",
          },

          {
              id: "124",
              title: "Kirby",
              desc: "I just want to tell you I appreciate all that you have done for me! Thank you!",
              parent: "general-1_accordion",
          },

          {
              id: "92",
              title: "Larry",
              desc: "<p>Dear Wallace and Graham, Just a short note to say 'Thank You' for handling my asbestos case, all the work you and your staff did, the medical checks that were performed and the entire work that you all preformed on my behalf. My wife and I are very grateful to all of you! Thanks again!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "117",
              title: "Larry",
              desc: "Whitney and Megan did a great job, really pleased! Very nice people. ",
              parent: "general-1_accordion",
          },

          {
              id: "93",
              title: "Lawrence",
              desc: "Whitney and Megan are without question the most professional and polite people I have ever met. They explained every step of the process and made me feel very comfortable. I felt complete trust in their guidance and wisdom. This was an extreme life changing event for my life. I feel honored to have them beside me as I enter a new chapeter in my life. I hope I never need this service again and will suggest them to anyone in need. I would consider them friends!",
              parent: "general-1_accordion",
          },

          {
              id: "422",
              title: "Lisa and Ron Hamby",
              desc: "<p>To the Wallace &amp; Graham Firm:</p><p>I would like to say thank you all for helping me and I would recommend you and your team to anyone.&nbsp; From my son and I, thank you for your team’s help.&nbsp; They were very respectful and considerate to all my needs.&nbsp; I could have not done it on my own.&nbsp; I give a big shout out to each of you from the bottom of our hearts.&nbsp; Bless each and every one of you!</p><p>Sincerely,</p><p>Lisa and Ron Hamby</p>",
              parent: "general-1_accordion",
          },

          {
              id: "96",
              title: "Loretta",
              desc: "<p>Thank you! I have a grandson graduating college this year and it's all paid for in full, thanks to you!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "147",
              title: "Mark",
              desc: "In May 2013, my wife was involved in a horrific car accident with another driver who had run a red light. Her injuries were severe and life altering. Even with health insurance, her loss of income and medical expenses were starting to become a financial hardship and affecting the way of life we once enjoyed. A close friend had suggested I contact the law firm of Wallace &amp; Graham to see if they may be able to help. He had used them in the past and was very satisfied with their service.  In the initial consultation, my wife and I met with Wallace &amp; Graham who explained to us our situation, how insurance works in the 'real world' and the options that were available to us.  Some things she told us were depressing but, I appreciated her honesty and candor on our options and what they could do to help. After a brief discussion with my wife, we hired Wallace &amp; Graham to represent our family with the insurance companies and all legal matters concerning this accident. Throughout the progression and settling of our case, I was very pleased with the communication process and felt like our inputs were wanted and valued. We were part of the team, not just passive spectators. Mona worked very hard for us and the results were beyond our expectations.",
              parent: "general-1_accordion",
          },

          {
              id: "155",
              title: "Martin",
              desc: "I wish to tell each of you that you will always be on my mind as to what you have done for me. I will never forget you and welcome any email or anything that I can receive from you. You people are just one wonderful group. God Bless each of you and your families.",
              parent: "general-1_accordion",
          },

          {
              id: "393",
              title: "Mary",
              desc: "<p>Thank you so much for continuing to look out for me.&nbsp; The checks are very much appreciated.&nbsp; You all jut bless me so much.&nbsp; The money comes at the right times.&nbsp; Sincere Thanks, Mary E. Martin</p>",
              parent: "general-1_accordion",
          },

          {
              id: "415",
              title: "Melva Lilley",
              desc: "<p>Wallace &amp; Graham, PA are mighty blessed to have Whitney Wallace Williams and Megan Hinson as part of your team.&nbsp; Whitney and Megan are very professional, knowledgeable, and pleasant.&nbsp; Throughout this long process both of these professionals have worked diligently to make sure I understood what was going on and how they were handling obstacles they were encountering.</p><p>&nbsp;</p><p>I appreciate Whitney and Megan and all the hard work they have done on my behalf.&nbsp; The only negative aspect of working with Whitney and Megan…they make other attorneys and paralegals look bad because they are so good!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "141",
              title: "Michael",
              desc: "When I was denied my disability, I immediately contacted Wallace &amp; Graham to see if they would take my case. They helped me thru the disability process and they were very thorough in getting all the information together for my case. My lawyer, Whitney Wallace, was very good at helping me at my hearing. I got my disability within 2 years of resigning from my job due to my health with the aid of Wallace &amp; Graham. I highly recommend their firm to anyone who needs help getting disability.  ",
              parent: "general-1_accordion",
          },

          {
              id: "133",
              title: "Mildred",
              desc: "Wallace &amp; Graham diligently fought for justice for our family while dealing with the insurance company and Angela and Megan, so kindly, attended to any questions we had during the workman’s compensation process. I highly recommend them to friends with legal situations. ",
              parent: "general-1_accordion",
          },

          {
              id: "143",
              title: "Monroe",
              desc: "<p>I learned about Wallace &amp; Graham through a friend. I will highly recommend them for any asbestos related illness or injury that could be covered under workman’s compensation. They did an outstanding job for me. It may take a while for results, but it is worth the time. They worked very hard and kept me posted on the progress of my settlement. Many thanks to Ed &amp; Trish for their hard work and support.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "389",
              title: "Mr. &amp; Mrs. Clark",
              desc: "<p>Tiffany Mack was up front from the beginning, honest and forthcoming about what to expect throughout the legal process. The only promise she made was that she would be there to guide us throughout it every step along the way. She was extremely patient and never unanswering! She was generous with her time and never made us feel like our questions were a bother. Tiffany’s professionalism, strength, and legal wit is unmatched! I recommend her to everyone I meet in need of legal services! I pray we should never need her service again, but look forward to always knowing I have a legal warrior in my corner. Thank you for fighting a battle we didn’t think we could win! We’re forever grateful! Mr. and Mrs. David Clark</p>",
              parent: "general-1_accordion",
          },

          {
              id: "498",
              title: "Mr. Callison",
              desc: "I would like to thank the Wallace &amp; Graham Firm for what they have accomplished for me.&nbsp; The laws in this State seem to be more for the big corporations than for the welfare of the employees.&nbsp; Without the tenacity of your Firm, I would have been swept under the rug and never thought of again.&nbsp; Ed Pauley and Trish McDermott were key in achieving this end result.&nbsp; I just wish Trish could have seen it through before she lost her fight with cancer.&nbsp; The Wallace &amp; Graham team was very caring and professional, and I would refer anyone to this Firm.",
              parent: "general-1_accordion",
          },

          {
              id: "116",
              title: "Nancy",
              desc: "For three years I worked with my employer thinking that I could handle it myself. It came a time where they would no longer send me to the doctor. I contacted Wallace and Graham to help through this. I was helped every step of the way with professional courtesy and understanding. The whole team: Whitney Wallace, Megan Hinson, Daniel Wallace and the receptionist were all very kind. Anytime that I called or had a question they were there. I have never dealt with a lawyer, but I would highly recommend Wallace &amp; Graham. My stress level and worries were relieved. I knew that they all had my best interest at heart. Thank you so very much! ",
              parent: "general-1_accordion",
          },

          {
              id: "457",
              title: "Norma Currence",
              desc: "<p>Dear Mrs. Wallace and Mr. Graham and to all personally involved,</p><p>&nbsp;</p><p>I can’t begin to thank you all for working so hard and putting in so many hours on the case for Thomas W. Currence and Norma. &nbsp;All Thomas ever wanted to do was take care of his family, and which I hate he is not here to see this money, maybe this is his way of taking care of me. It means so much that you were willing to work so hard for a simple little family like ours. It amazes me also to think how many hours or years it would have taken him to make that amount of many. Again, thank all of you very much.</p><p>Forever Grateful,</p><p>Norma Currence</p>",
              parent: "general-1_accordion",
          },

          {
              id: "99",
              title: "Paul",
              desc: "Thank you so very much! Each of you guys are amazing at what yall do! Thank you! ",
              parent: "general-1_accordion",
          },

          {
              id: "136",
              title: "Paul",
              desc: "Bill, Mona Lisa, Cathy, Stephanie and all other associates of Wallace &amp; Graham have always treated us with the utmost caring, concern and compassion – and with our best interest at heart. We have already recommended them to others with legal needs and will continue to do so in the future.",
              parent: "general-1_accordion",
          },

          {
              id: "149",
              title: "Percival",
              desc: "I want to say thank you Wallace &amp; Graham for all your hard work and commitment on my workers comp case. You are a team that wins! I couldn't have done it without all of your hard work, experience and capabilities. It's nice to know that when you really need help there are good and capable people there to help. I very much appreciate your honesty and integrity in handling a difficult situation. I would recommend Wallace &amp; Graham to anyone with legal needs.Thank you again Wallace &amp; Graham.",
              parent: "general-1_accordion",
          },

          {
              id: "122",
              title: "Robert",
              desc: "<p>I want to say you all did every thing just right. I could not ask for nothing to be done any better then you all did.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "137",
              title: "Robert",
              desc: "<p>I am well pleased with Wallace &amp; Graham who handled my case. They were so devoted, took the time and effort to get me what I deserved. I highly recommend Wallace &amp; Graham to anyone needing legal help. Wallace &amp; Graham is a notch above all other law firms.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "140",
              title: "Robert",
              desc: "<p>I would recommend the firm of Wallace &amp; Graham to anyone with any legal needs. They won a complicated workman’s compensation case for me. They always helped me understand each step of the process and regularly updated me on the progress of my case. I am completely satisfied with their help.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "404",
              title: "Robert &amp; Kim Newton",
              desc: "<p>Dear Mona Lisa,</p><p>Thank you to everyone in your firm for all the help over the last couple years, including Lucinda, Daniel and Whitney and all the others behind the scenes that I have not met.</p><p>You should be very proud of Whitney as she is smart, intelligent, and fiery like you!!&nbsp; Great Representation!!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "423",
              title: "Robert Helton, Jr.",
              desc: "<p>I am very satisfied with your law firm.&nbsp; I found everyone helpful and willing to assist me in every way possible.&nbsp; I would highly recommend you to anyone!</p>",
              parent: "general-1_accordion",
          },

          {
              id: "105",
              title: "Roland",
              desc: "<p>Thank you for your persistent effort Wallace and Graham.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "477",
              title: "Ronald Beason",
              desc: "Since becoming a client of Wallace and Graham in 2019, it has been a positive experience.&nbsp; Any time I needed answers to my questions concerning my case, Wallace and Graham was always available to help and were very professional.&nbsp; My main contact with Wallace and Graham was Trish McDermott, who was very helpful and knowledgeable.&nbsp; In the future I would not hesitate using Wallace and Graham or recommending your law firm to family and friends, which I have done several times already.",
              parent: "general-1_accordion",
          },

          {
              id: "127",
              title: "Ronnie",
              desc: "To the Wallace &amp; Graham law firm, we would like to say thank you for what you have done, Mr. Pross the work you have done we would like to say a Thank You! And if you can please stay in touch, Thank you all and May God truly bless you.",
              parent: "general-1_accordion",
          },

          {
              id: "110",
              title: "Ruby",
              desc: "To all of the staff at Wallace and Graham, Thank you for all the hard work you all have done over the years. This check came at a time when I really need it. Again I thank you. ",
              parent: "general-1_accordion",
          },

          {
              id: "102",
              title: "Sevone",
              desc: "Thanks for your continued effort on my behalf!",
              parent: "general-1_accordion",
          },

          {
              id: "475",
              title: "Sherry Crooke",
              desc: "<p>Dad and I would like to express our thanks and appreciation for representing us in Mom’s workers’ compensation case.&nbsp; Your courtesy, kindness and professionalism was always displayed to us in all interactions with your firm.&nbsp; Amanda did a terrific job in keeping me informed and up to date through all emails and phone conversations.&nbsp;</p><p>Working with your firm throughout this whole process was a pleasure and without reservation would highly recommend Wallace and Graham to anyone needing legal services.</p><p>Sincerely,</p><p>Sherry Crooke, Daughter of Margie Ruth Cooper</p>",
              parent: "general-1_accordion",
          },

          {
              id: "130",
              title: "Thomas",
              desc: "<p>Wallace &amp; Graham have worked very hard for me on my hearing loss case. Mark and Frieda have done their homework and helped me win this case. It has not been easy or quick. Mark assured me that we had a good case, and that we would win. I am very satisfied with my attorney he dug deep and hit them hard – where it hurts. I know he had some trying times with Domtar’s lawyer and the industrial commission. I could not had made it without you. Thank you very much Mark and Frieda.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "476",
              title: "Thomas Fiello",
              desc: "<p>I was injured at work, a brain injury, and have never had to deal with a workers comp or personal injury case ever in my life, being the one hurt.&nbsp; I had no idea what I needed to do to make sure my family, and myself were going to be taken care of medically and financially.&nbsp;</p><p>My wife and I made an appointment with Wallace and Graham to come in and discuss my injury and what our options were and to help understand what we needed to do to make sure we were protected.&nbsp;</p><p>On that very first visit we were greeted in the lobby by a lady, who I had no idea who she was, but later would have the greatest respect for.&nbsp; That lady was Mona Lisa Wallace.</p><p>Mona asked me if we were taken care of and how we were doing, if we needed some water, and what the purpose of our visit was.&nbsp; After we explained to her what had happened to me, Mona dropped everything and sat down with us.&nbsp; Not only that, she began calling in other attorneys to get their opinions as well.&nbsp;</p><p>At first I was extremely overwhelmed by all the questions coming at me from every angle of the room, and when Mona asked everyone listened.&nbsp; I later found out, this how Mona operates (full speed all the time).&nbsp; Mona called her daughter in as well, at the time to over see the workers compensation side.&nbsp; Whitney showed immediately, that the apple does not fall far from the tree.&nbsp; Whitney assured me that she was going to oversee my case and that if I had any questions to giver her a call.&nbsp; Both Mona and Whitney gave me not just the work phone numbers but their personal cell phone numbers and emails. (which they may have regretted later, I texted and emailed A LOT)</p><p>Through out my injury and battles with Workers Comp, Whitney always had time for my calls, emails, texts, and was a shoulder for me to vent to or explain things to me that I would not understand.</p><p>With a Brain injury you have mood swings and do some things that you really regret.&nbsp; I once got so confused and frustrated that I sent an email that I terribly still regret to this day to Mona.&nbsp; I questioned if they were working on my case and if they were questioning everyone.&nbsp; Later, and as mentioned to this day I regret that email.&nbsp;</p><p>During the time of Wallace and Graham handling my case I really went though a lot of trials in my life.&nbsp; I went through a divorce, PTSD, my mother passed away (and having lost my father 5 years before this really made me feel alone), depression, suicidal thoughts, started a new relationship, got married, bought a home, daughter issues…. Through out all of this Whitney was always there.&nbsp; Whitney and Mona, and later Chuck were my only consistent in my life.</p><p>Every meeting with Wallace and Graham I always left feeling like they cared and that I was their priority, ALWAYS.</p><p>Mona and Whitney, I will never be able to thank you both enough for what you have helped me get through and made me believe in myself more and to understand that my injury wasn’t just a normal concussion.&nbsp;</p><p>I could go on for days thinking of instances where they really comforted me along the way (like after reading a deposition).</p><p>Thank you so much to the both of you and EVERYONE at Wallace and Graham.&nbsp;</p><p>I know that if I still have any questions or if I needed them again for anything, they would be there for me once again.</p>",
              parent: "general-1_accordion",
          },

          {
              id: "424",
              title: "Tim Hullett",
              desc: "<p>Our family will always rest easy knowing the Wallace &amp; Graham Legal Team are on our side!</p>",
              parent: "general-1_accordion",
          },
          {
              id: "115",
              title: "Vega",
              desc: "<p>Hearing loss can affect you lively hood and we believe in finding a solution for our clients. Click here to view a testimonial from one of our clients.</p>",
              parent: "general-1_accordion",
          },
          {
              id: "128",
              title: "William",
              desc: "<p>I would highly recommend Wallace &amp; Graham’s law firm to anyone needing legal assistance. Everyone that I talked to were very understanding and very helpful in guiding me through the legal process with my worker’s compensation claim. I especially want to express a heartfelt thank you to Michael Pross for all of his hard work and his most needed guiding advice. In life everyone needs a guardian angel and mine within Wallace &amp; Graham was Beth Ousley. She made sure all of my paperwork was in order and called me often to make sure I understood what to expect next and how to fill out the needed paperwork. “Hats off” to Wallace &amp; Graham. May God Bless you Beth and Michael and of course Bill Graham.</p>",
              parent: "general-1_accordion",
          },
          {
              id: "459",
              title: "William Smith",
              desc: "<p>I know I am dying.&nbsp; I &nbsp;have been up since 3 am because I am so sick.&nbsp; But I want you to know that Trish and everyone at Wallace &amp; Graham have been excellent and you are amazing people.&nbsp; I appreciate everything you have done.<u></u><u></u></p><p>I can never thank you enough and for what little life I have left, I always be indebted to your firm.</p>",
              parent: "general-1_accordion",
          },
          {
              id: "454",
              title: "William T. Poteat",
              desc: "Thank you all so much for all you do.&nbsp; The endless hours and research that was put forth in the handling of my workers’ compensation claim and the communication was very constant.&nbsp; I am impressed with the Wallace and Graham firm.&nbsp; I would like to extend a special thank you to Amanda Norton.",
              parent: "general-1_accordion",
          },
          {
              id: "144",
              title: "Wynima",
              desc: "Wallace &amp; Graham exemplify professionalism, integrity, compassion, and consistency. They took out the time to visit my dad, to explain the step by step process of his claim. My family and I, without reservations, highly recommend them for any legal matters. ",
              parent: "general-1_accordion",
          },
          ]
    },


  ]

}
  ]
}
