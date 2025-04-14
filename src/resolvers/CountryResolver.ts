import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import CountryInput from "../inputs/CountryInput";

@Resolver(Country)
export class CountryResolver {
   @Query(() => [Country])
   async getAllCountries() {
      const countries = await Country.find();
      return countries;
   }

   @Mutation(() => Country)
   async createCountry(@Arg("data") newdata: CountryInput) {
      const newCountry = Country.create({
         ...newdata
      })

      const countryToAdd = await newCountry.save();

      return countryToAdd;
   }
}