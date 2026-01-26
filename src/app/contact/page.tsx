"use client"

// import Button from "@/components/Button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
// import Radio from "./Radio"
import { Textarea } from "@/components/ui/textarea"

import * as React from "react"

import { Separator } from "@/components/ui/separator"
import { sendEmail } from "@/components/Mail"

const Form = () => {
//   const { value } = useValue();
  const [formValues, setFormValues] = React.useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const isFormIncomplete = Object.values(formValues).some(value => value.toString().trim() === '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

    
    const handleSubmit = async (formData: FormData) => {
        
      const result = await sendEmail(formData);
      if (result.success) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    };
  return (

      <div className="flex justify-center items-center">

        <div className="md:min-w-[625px] p-2 sm:max-w-[625px] bg-white">
          <form action={handleSubmit}>
            <div className=" rounded-md border md:p-10 p-4">
              <div>
                <div></div>
                <div className="flex items-center justify-center pb-12">
                  <Image src="/dm_logo.png" alt="" width={300} height={100} />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Full name *</Label>
                  <Input id="name-1" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} required/>
                  
                </div>
                <Separator className="my-2" />
                <div className="grid gap-3">
                  <Label htmlFor="phone-1">Phone *</Label>
                  <Input id="phone-1" name="phone" placeholder="05111222333" value={formValues.phone} onChange={handleChange} required/>
                </div>
                <Separator className="my-2" />
                <div className="grid gap-3">
                  <Label htmlFor="email-1">Email *</Label>
                  <Input id="email-1" name="email" placeholder="example@email.com" value={formValues.email} onChange={handleChange} required/>
                </div>
                <Separator className="my-2" />

                <div className="grid gap-3">
                  <Label htmlFor="message-1">Whatever you want *</Label>
                  <Textarea className="min-h-30" id="message-1" name="message" placeholder="I would like to know about ..." value={formValues.message} onChange={handleChange} required/>
                </div>
                <Separator className="my-2" />
             
              </div>
              <div className="py-10 flex items-center sm:justify-center">
                <Button type="submit" className="w-full text-white cursor-pointer bg-black hover:bg-gray-500" disabled={isFormIncomplete}>Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
  )

}
export default Form