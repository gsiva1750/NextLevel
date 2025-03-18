import classes from './page.module.css'
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
export default function MealsDetailsPage({params}){
    const meal=getMeal(params.slug);
    meal.instruction=meal.instruction.replace(/\n/g,'<br/>')
    return
   <> 
     <header> 
        <div className={classes.image}>
            <Image src={meal.image} fill alt=""/>
        </div>
        <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
                by<a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p> 
            <p className={classes.summary}>SUMMARY</p>
        </div>
         </header>
     <main> 
        <p className={classes.instruction} dangerouslySetInnerHTML={{
            __html:meal.instruction,  
        }}></p>
     </main>
    </>
}