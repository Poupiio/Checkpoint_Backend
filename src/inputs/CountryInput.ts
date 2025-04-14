import { Country } from "../entities/Country";
import { Field, InputType } from "type-graphql";

@InputType()
class CountryInput implements Partial<Country> {
   @Field()
   name: string;

   @Field()
   code: string;

   @Field()
   emoji: string;
}

export default CountryInput;