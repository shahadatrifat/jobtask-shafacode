import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Leaf, Truck, Award, Facebook, Instagram, Youtube } from "lucide-react";

const About = () => {
  const experts = [
    {
      name: "Ashraful Alam Alagar",
      role: "Gardening Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      description: "We are and how it is related to you and what do you do and how you do",
    },
    {
      name: "Mahiyan Nipu",
      role: "Plant Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      description: "Your hero section just a type something about hero section something hero",
    },
    {
      name: "Azetkar Hamen",
      role: "Soil Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      description: "We are and how it is related to you and what do you do and how you do",
    },
  ];

  const commitments = [
    {
      icon: Leaf,
      title: "Plant Clinic Analysis",
      description: "We provide our plants and our seeds to you then you can receive our plants",
    },
    {
      icon: Truck,
      title: "Expert Hing Gardnet",
      description: "If you can just order our plants you can get our plants quickly at your doorstep",
    },
    {
      icon: Award,
      title: "Satisfaction Guarantee",
      description: "If you receive our products any damaged or any broken product you get money back",
    },
  ];

  return (
    <div className="min-h-screen bg-background mt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1200&q=80)`,
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-primary-foreground mb-4"
          >
            Your Trusted Partner in Gardening
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-foreground/90 mb-8 max-w-2xl"
          >
            Cultivating expertise, growing communities, and nurturing your green dreams for a brighter tomorrow
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-[#CC7722] hover:bg-[#CC7722]/90 text-secondary font-semibold px-8">
              Read Our Story
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Meet Our Gardening Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of horticulturists and plant specialists brings years of combined expertise to help you in your garden journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-secondary text-center hover:shadow-lg transition-shadow">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{expert.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {expert.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-6 bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Commitment to You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to providing you with the knowledge, tools, and support needed for growing success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 text-center bg-secondary   h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16 px-6 bg-accent text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Join Our TriGardening Community
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              We're dedicated to providing you with the knowledge, tools, and support needed for growing success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Facebook Community Forum
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Join our vibrant Facebook group to connect with fellow garden enthusiasts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Trigardening Youtube Channel
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Subscribe to our channel for expert tips, garden tours
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-8 bg-secondary border-2 border-primary-foreground hover:bg-primary-foreground text-primary hover:text-primary"
              >
                Join Our Community
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80"
                alt="Garden"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Get In Touch
            </h2>
            <p className="text-muted-foreground">
              Have questions? We'd love to hear from you. Share your gardening knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    +8801234567890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Facebook Page</p>
                  <p className="text-sm text-muted-foreground">
                    fb.me/trigardening
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    wa.me/8801234567890
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6">
                <div className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;