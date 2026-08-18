        // =================================================================
        // ===== جافا سكريبت - الكود الكامل مع جميع التعديلات المطلوبة =====
        // =================================================================

        // ===== تكوين Supabase =====
        const SUPABASE_URL = 'https://oxqgpgeqgtwipwtndnuh.supabase.co';
        const SUPABASE_ANON_KEY = 'sb_publishable_ZUnUVr9myTC-CRlrEdJonw_8Xsk0efX';

        // ===== الإعدادات العامة =====
        const CFG = {
            MIN_PLAYERS: 3,
            MAX_PLAYERS: 14,
            AVATAR_COLORS: ['#ff5e5b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce', '#5dade2', '#58d68d', '#eb984e', '#ec7063',
                '#af7ac5', '#5499c7', '#f0b27a', '#e67e22', '#2ecc71'
            ],
            CAT_META: {
                'أكلات': { icon: 'pizza' },
                'دول ومدن': { icon: 'globe' },
                'أفلام ومسلسلات': { icon: 'film' },
                'تكنولوجيا': { icon: 'cpu' },
                'حيوانات': { icon: 'paw-print' },
                'رياضة': { icon: 'trophy' },
                'أدوات منزلية': { icon: 'home' },
                'مشروبات': { icon: 'coffee' },
                'فواكه': { icon: 'apple' },
                'أشياء عامة': { icon: 'box' },
                'مهن': { icon: 'briefcase' }
            }
        };

        // ===== كلمات اللعبة =====
        const WORD_CLUSTERS = {
            'أكلات': [
                ['بيتزا', 'برجر', 'سوشي', 'تاكو', 'شاورما'],
                ['كبسة', 'مندي', 'برياني', 'مجبوس', 'كوزي'],
                ['كنافة', 'بقلاوة', 'قطايف', 'بسبوسة', 'زلابية'],
                ['فلافل', 'حمص', 'متبل', 'بابا غنوج', 'فتوش'],
                ['مكرونة', 'لازانيا', 'رافيولي', 'بيني', 'سباغيتي'],
                ['شوربة', 'حساء', 'مرق', 'شوربة عدس', 'شوربة خضار'],
                ['كباب', 'كفتة', 'تكة', 'شيش طاووق', 'ريش'],
                ['سمك', 'روبيان', 'سلمون', 'تونة', 'قد'],
                ['دجاج', 'لحم', 'خروف', 'بط', 'أرنب'],
                ['معجنات', 'فطاير', 'سمبوسة', 'منتو', 'يغمش'],
                ['عصيدة', 'جريش', 'مرقوق', 'مطازيز', 'قرصان'],
            ],
            'دول ومدن': [
                ['السعودية', 'الإمارات', 'الكويت', 'قطر', 'البحرين'],
                ['مصر', 'المغرب', 'الجزائر', 'تونس', 'ليبيا'],
                ['فرنسا', 'إيطاليا', 'إسبانيا', 'ألمانيا', 'البرتغال'],
                ['اليابان', 'الصين', 'كوريا', 'تايلاند', 'فيتنام'],
                ['أمريكا', 'كندا', 'المكسيك', 'البرازيل', 'الأرجنتين'],
                ['لبنان', 'الأردن', 'سوريا', 'فلسطين', 'العراق'],
                ['باريس', 'روما', 'مدريد', 'برلين', 'لندن'],
                ['دبي', 'الرياض', 'الدوحة', 'مسقط', 'المنامة'],
                ['طوكيو', 'بكين', 'سيول', 'بانكوك', 'هانوي'],
                ['اسطنبول', 'طهران', 'موسكو', 'نيودلهي', 'جاكرتا'],
                ['القاهرة', 'الإسكندرية', 'الأقصر', 'أسوان', 'شرم الشيخ'],
                ['الدار البيضاء', 'مراكش', 'طنجة', 'فاس', 'أكادير'],
            ],
            'أفلام ومسلسلات': [
                ['تيتانيك', 'أفاتار', 'جوراسيك بارك', 'حرب النجوم', 'هاري بوتر'],
                ['فروزن', 'موانا', 'كوكو', 'أسطورة مريدا', 'رابونزل'],
                ['إنسبشن', 'إنترستيلر', 'ماتريكس', 'تينيت', 'غرافيتي'],
                ['بيكي بلايندرز', 'بريكينغ باد', 'غيم أوف ثرونز', 'سترينجر ثينغز', 'ذا كراون'],
                ['الأسد الملك', 'بامبي', 'الأميرة النائمة', 'سندريلا', 'الجميلة والوحش'],
                ['فاست آند فيوريس', 'ميشين إمبوسيبل', 'جيمس بوند', 'جون ويك', 'ماد ماكس'],
                ['توي ستوري', 'شريك', 'فايندينغ نيمو', 'مونسترز إنك', 'زوتوبيا'],
                ['جوكر', 'باتمان', 'سبايدرمان', 'آيرون مان', 'بلاك بانثر'],
                ['الموت السعيد', 'الرجل العنكبوت', 'الرجل الحديدي', 'ثور', 'كابتن أمريكا'],
                ['العراب', 'الخيال العلمي', 'الفضائي', 'الغابة', 'القراصنة'],
                ['سنو وايت', 'بياض الثلج', 'الجميلة', 'الحورية', 'الساحرة'],
                ['المومياء', 'الفرعون', 'الملك', 'المحارب', 'البطل'],
            ],
            'تكنولوجيا': [
                ['آيفون', 'سامسونج', 'هواوي', 'شاومي', 'ون بلس'],
                ['لابتوب', 'ماك بوك', 'كروم بوك', 'سيرفس برو', 'ثينك باد'],
                ['إنستغرام', 'تيك توك', 'سناب شات', 'تويتر', 'فيسبوك'],
                ['بلوتوث', 'واي فاي', 'إن إف سي', 'يو إس بي', 'إتش دي إم آي'],
                ['ذكاء اصطناعي', 'تعلم آلي', 'شبكة عصبية', 'خوارزمية', 'بيانات ضخمة'],
                ['طابعة', 'سكانر', 'آلة تصوير', 'بروجكتور', 'شاشة لمس'],
                ['ساعة ذكية', 'سماعة لاسلكية', 'نظارة واقع افتراضي', 'حلقة ذكية', 'جهاز تتبع'],
                ['تسلا', 'سيارة كهربائية', 'سكوتر ذكي', 'دراجة كهربائية', 'حافلة ذاتية'],
                ['جوجل', 'أمازون', 'أبل', 'مايكروسوفت', 'نتفليكس'],
                ['يوتيوب', 'تويتر', 'لينكد إن', 'سناب شات', 'واتساب'],
                ['روبوت', 'طائرة بدون طيار', 'مساعد صوتي', 'شاشة ذكية', 'ثلاجة ذكية'],
                ['إنترنت', 'شبكة', 'سحابة', 'تخزين', 'برمجيات'],
            ],
            'حيوانات': [
                ['فيل', 'فرس نهر', 'خنزير بري'],
                ['أسد', 'نمر', 'فهد', 'وشق', 'جاكوار'],
                ['دولفين', 'حوت', 'فقمة', 'عجل البحر', 'خنزير البحر'],
                ['نسر', 'صقر'],
                ['ثعبان', 'أفعى', 'صل', 'كوبرا', 'أناكوندا'],
                ['بطريق', 'بفن', 'نورس', 'قطرس', 'غاق'],
                ['سلحفاة', 'سلحفاة بحرية', 'ترسة', 'سلحفاة صندوقية', 'سلحفاة نهرية'],
                ['قرد', 'غوريلا', 'شمبانزي'],
                ['ذئب', 'ثعلب', 'ابن آوى', 'ضبع', 'كلب بري'],
                ['غزال', 'ظبي', 'وعل', 'مها', 'ريم'],
                ['حمار', 'حصان', 'فرس', 'مهر', 'بغل'],
                ['جمل', 'ناقة'],
            ],
            'رياضة': [
                ['كرة قدم', 'كرة الصالات', 'كرة شاطئية', 'كرة قدم أمريكية', 'رغبي'],
                ['تنس', 'بادل', 'بينغ بونغ', 'ريشة طائرة', 'سكواش'],
                ['سباحة', 'غطس', 'كرة ماء', 'سباحة حرة', 'سباحة ظهر'],
                ['ملاكمة', 'كيك بوكسينغ', 'مواي تاي', 'جيو جيتسو', 'كاراتيه'],
                ['ركوب الدراجات', 'سباق دراجات', 'جبلية', 'بي إم إكس', 'دراجات ثابتة'],
                ['تزلج', 'تزلج فني', 'هوكي جليدي', 'كيرلنغ', 'زلاجة جماعية'],
                ['جمباز', 'جمباز إيقاعي', 'ترامبولين', 'باركور', 'أكروبات'],
                ['غولف', 'ميني غولف', 'كروكيه', 'بولو', 'فروسية'],
                ['ألعاب قوى', 'جري', 'قفز', 'رمي', 'سباق'],
                ['رفع أثقال', 'كمال أجسام', 'لياقة', 'تمارين', 'تحمل'],
                ['كرة سلة', 'كرة يد', 'كرة طائرة', 'كرة شاطئية', 'كرة ماء'],
                ['تجديف', 'قوارب', 'شراع', 'إبحار', 'التزلج المائي'],
            ],
            'أدوات منزلية': [
                ['ثلاجة', 'فريزر', 'براد', 'مبرد ماء', 'صندوق ثلج'],
                ['غسالة', 'نشافة', 'غسالة صحون', 'مجفف', 'مكواة'],
                ['مكرويف', 'فرن', 'محمصة', 'قلاية هوائية', 'طباخ بطيء'],
                ['خلاط', 'عصارة', 'مطحنة', 'محضرة طعام', 'مضرب بيض'],
                ['مكنسة', 'مكنسة روبوت', 'ممسحة', 'جهاز تنظيف بالبخار', 'مكنسة لاسلكية'],
                ['سكين', 'مقص', 'مفتاح', 'براغي', 'مطرقة'],
                ['طاولة', 'كرسي', 'خزانة', 'رف', 'سرير'],
                ['وسادة', 'لحاف', 'شرشف', 'غطاء', 'مخدة'],
                ['إبريق', 'كأس', 'صحن', 'ملعقة', 'شوكة'],
                ['مقلاة', 'قدر', 'حلة', 'طنجرة', 'صينية'],
                ['مصباح', 'لمبة', 'شمعة', 'ضوء', 'مصباح يدوي'],
                ['ساعة', 'منبه', 'تقويم', 'مرآة', 'ميزان'],
            ],
            'مشروبات': [
                ['قهوة', 'نسكافيه', 'كابتشينو', 'لاتيه', 'إسبريسو'],
                ['شاي', 'شاي أحمر', 'شاي أخضر', 'شاي أبيض', 'شاي أسود'],
                ['عصير', 'عصير فواكه', 'عصير طبيعي', 'عصير مثلج', 'عصير مركّز'],
                ['غازيات', 'كولا', 'سفن أب', 'فانتا', 'مشروب طاقة'],
                ['حليب', 'لبن', 'عيران', 'شنينة', 'حليب بالشوكولاتة'],
                ['ماء'],
                ['شوكولاتة ساخنة', 'سحلب', 'قهوة بالحليب', 'موكا', 'فرابتشينو'],
                ['ليموناضة', 'نعناع', 'تمر هندي', 'عرق سوس', 'كركديه'],
                ['عصير برتقال', 'عصير تفاح', 'عصير مانجو', 'عصير فراولة', 'عصير رمان'],
                ['مشروب غازي', 'بيبسي', 'كوكاكولا', 'سبرايت', 'دكتور بيبر'],
                ['عصير طماطم', 'عصير جزر', 'عصير كرفس', 'عصير شمندر', 'عصير بروكلي'],
                ['مشروب ساخن', 'مشروب بارد'],
            ],
            'فواكه': [
                ['تفاح', 'كمثرى', 'خوخ', 'مشمش', 'دراق'],
                ['موز', 'مانجو', 'أناناس'],
                ['فراولة', 'توت', 'عنب', 'كرز', 'رمان'],
                ['برتقال', 'ليمون'],
                ['كيوي', 'أفوكادو', 'تمر', 'جوز الهند', 'فاكهة التنين'],
                ['توت بري', 'توت أسود', 'توت أحمر', 'توت أزرق', 'توت أبيض'],
                ['تين', 'زيتون', 'بلح', 'عناب', 'سفرجل'],
                ['كرز', 'خوخ', 'مشمش', 'بطيخ'],
                ['جوز', 'لوز', 'فستق', 'كاجو', 'بندق'],
            ],
            'أشياء عامة': [
                ['سيارة', 'شاحنة', 'حافلة', 'دراجة نارية', 'سكوتر'],
                ['طائرة', 'مروحية', 'منطاد', 'صاروخ', 'طائرة شراعية'],
                ['قلم رصاص', 'حبر', 'طباشير'],
                ['كتاب', 'مجلة', 'جريدة', 'دفتر', 'مفكرة'],
                ['ساعة يد', 'ساعة حائط', 'منبه', 'ساعة رملية'],
                ['هاتف', 'جهاز لوحي', 'حاسوب', 'سماعة', 'كاميرا'],
                ['مظلة', 'معطف', 'حذاء', 'قبعة', 'وشاح'],
                ['مفتاح', 'قفل', 'سلسلة', 'باب', 'نافذة'],
                ['خاتم', 'سوار', 'قلادة', 'أقراط', 'تيجان'],
                ['حقيبة', 'شنطة', 'حافظة', 'علبة', 'صندوق'],
                ['مرآة', 'إطار', 'لوحة', 'معلقة', 'تمثال'],
                ['أريكة', 'كنبة', 'مقعد', 'كرسي', 'طاولة'],
            ],
            'مهن': [
                ['طبيب', 'مهندس', 'معلم', 'محامي', 'قاضي'],
                ['طيار', 'بحار', 'سائق', 'ميكانيكي', 'كهربائي'],
                ['طباخ', 'خباز', 'حلواني', 'جزار', 'سمكري'],
                ['نجار', 'حداد', 'بناية', 'دهان', 'سباك'],
                ['مصمم', 'مصور', 'رسام', 'نحات', 'مهندس معماري'],
                ['كاتب', 'شاعر', 'روائي', 'صحفي', 'محرر'],
                ['مغني', 'ممثل', 'راقص', 'موسيقي', 'مايسترو'],
                ['رياضي', 'مدرب', 'حكم', 'معلق', 'محلل'],
                ['رجل أعمال', 'مصرفي', 'محاسب', 'مدقق', 'مستشار'],
                ['مزارع', 'فلاح', 'راعي', 'بيطري', 'امن سبراني'],
                ['عالم', 'باحث', 'مخترع', 'مكتشف', 'مختبر'],
                ['جندي', 'شرطي', 'حارس', 'ضابط', 'قائد'],
            ],
        };

        // ==============================================================
        // ===== نظام إدارة المؤقتات المركزية (TimerManager) =====
        // ==============================================================
        const TimerManager = {
            timers: {},
            idCounter: 0,

            set(callback, interval, key) {
                const id = key || ('timer_' + (++this.idCounter));
                if (this.timers[id]) {
                    clearInterval(this.timers[id]);
                    delete this.timers[id];
                }
                this.timers[id] = setInterval(callback, interval);
                return id;
            },

            clear(id) {
                if (this.timers[id]) {
                    clearInterval(this.timers[id]);
                    delete this.timers[id];
                    return true;
                }
                return false;
            },

            clearAll() {
                Object.keys(this.timers).forEach(id => {
                    clearInterval(this.timers[id]);
                    delete this.timers[id];
                });
                this.timers = {};
            },

            clearByPrefix(prefix) {
                Object.keys(this.timers).forEach(id => {
                    if (id.startsWith(prefix)) {
                        clearInterval(this.timers[id]);
                        delete this.timers[id];
                    }
                });
            },

            exists(id) {
                return !!this.timers[id];
            }
        };

        // ==============================================================
        // ===== نظام إدارة الأزرار المركزية (ButtonManager) =====
        // ==============================================================
        const ButtonManager = {
            states: {},

            disable(btnId, loadingText) {
                const btn = document.getElementById(btnId);
                if (!btn) return false;
                if (this.states[btnId]) return false;
                this.states[btnId] = {
                    html: btn.innerHTML,
                    disabled: btn.disabled,
                    classes: btn.className
                };
                btn.disabled = true;
                btn.classList.add('opacity-70', 'cursor-wait');
                if (loadingText) {
                    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${loadingText}`;
                } else {
                    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جاري التنفيذ...`;
                }
                return true;
            },

            enable(btnId) {
                const btn = document.getElementById(btnId);
                if (!btn) return false;
                if (!this.states[btnId]) {
                    btn.disabled = false;
                    btn.classList.remove('opacity-70', 'cursor-wait');
                    return true;
                }
                const state = this.states[btnId];
                btn.disabled = state.disabled;
                btn.className = state.classes;
                btn.innerHTML = state.html;
                delete this.states[btnId];
                return true;
            },

            isDisabled(btnId) {
                return !!this.states[btnId];
            },

            resetAll() {
                Object.keys(this.states).forEach(id => {
                    this.enable(id);
                });
                this.states = {};
            }
        };

        // ==============================================================
        // ===== نظام المؤثرات الصوتية =====
        // ==============================================================
        const SoundManager = {
            context: null,
            initialized: false,

            init() {
                try {
                    this.context = new(window.AudioContext || window.webkitAudioContext)();
                    this.initialized = true;
                } catch (e) {
                    console.warn('⚠️ Web Audio API not supported');
                }
            },

            play(type) {
                if (!this.initialized) {
                    this.init();
                }
                if (!this.context) return;

                try {
                    const oscillator = this.context.createOscillator();
                    const gainNode = this.context.createGain();
                    oscillator.connect(gainNode);
                    gainNode.connect(this.context.destination);

                    const now = this.context.currentTime;

                    switch (type) {
                        case 'click':
                            oscillator.frequency.setValueAtTime(800, now);
                            oscillator.type = 'sine';
                            gainNode.gain.setValueAtTime(0.15, now);
                            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                            oscillator.start(now);
                            oscillator.stop(now + 0.08);
                            break;

                        case 'success':
                            oscillator.frequency.setValueAtTime(523, now);
                            oscillator.frequency.setValueAtTime(659, now + 0.1);
                            oscillator.frequency.setValueAtTime(784, now + 0.2);
                            oscillator.type = 'sine';
                            gainNode.gain.setValueAtTime(0.15, now);
                            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                            oscillator.start(now);
                            oscillator.stop(now + 0.35);
                            break;

                        case 'error':
                            oscillator.frequency.setValueAtTime(300, now);
                            oscillator.type = 'sawtooth';
                            gainNode.gain.setValueAtTime(0.1, now);
                            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                            oscillator.start(now);
                            oscillator.stop(now + 0.3);
                            break;

                        case 'timer_warning':
                            oscillator.frequency.setValueAtTime(600, now);
                            oscillator.type = 'square';
                            gainNode.gain.setValueAtTime(0.08, now);
                            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                            oscillator.start(now);
                            oscillator.stop(now + 0.1);
                            setTimeout(() => {
                                try {
                                    const osc2 = this.context.createOscillator();
                                    const gain2 = this.context.createGain();
                                    osc2.connect(gain2);
                                    gain2.connect(this.context.destination);
                                    osc2.frequency.setValueAtTime(600, this.context.currentTime);
                                    osc2.type = 'square';
                                    gain2.gain.setValueAtTime(0.08, this.context.currentTime);
                                    gain2.gain.exponentialRampToValueAtTime(0.001, this.context
                                        .currentTime + 0.1);
                                    osc2.start(this.context.currentTime);
                                    osc2.stop(this.context.currentTime + 0.1);
                                } catch (e) {}
                            }, 200);
                            break;

                        case 'reveal':
                            oscillator.frequency.setValueAtTime(200, now);
                            oscillator.frequency.setValueAtTime(400, now + 0.1);
                            oscillator.frequency.setValueAtTime(600, now + 0.2);
                            oscillator.type = 'sine';
                            gainNode.gain.setValueAtTime(0.12, now);
                            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                            oscillator.start(now);
                            oscillator.stop(now + 0.35);
                            break;

                        case 'game_start':
                            const freqs = [440, 554, 659];
                            freqs.forEach((freq, i) => {
                                const osc = this.context.createOscillator();
                                const gain = this.context.createGain();
                                osc.connect(gain);
                                gain.connect(this.context.destination);
                                osc.frequency.setValueAtTime(freq, now + i * 0.12);
                                osc.type = 'sine';
                                gain.gain.setValueAtTime(0.12, now + i * 0.12);
                                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.15);
                                osc.start(now + i * 0.12);
                                osc.stop(now + i * 0.12 + 0.15);
                            });
                            break;

                        case 'vote':
                            oscillator.frequency.setValueAtTime(500, now);
                            oscillator.type = 'sine';
                            gainNode.gain.setValueAtTime(0.12, now);
                            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                            oscillator.start(now);
                            oscillator.stop(now + 0.1);
                            break;

                        default:
                            oscillator.frequency.setValueAtTime(440, now);
                            oscillator.type = 'sine';
                            gainNode.gain.setValueAtTime(0.1, now);
                            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                            oscillator.start(now);
                            oscillator.stop(now + 0.1);
                    }
                } catch (e) {
                    // تجاهل أخطاء الصوت
                }
            }
        };

        // ==============================================================
        // ===== تكوين مرحلة الأسئلة =====
        // ==============================================================
        const QA_CONFIG = {
            ASKER_TIME: 90,
            RESPONDENT_TIME: 90,
            TOTAL_ROUNDS: 6,
            MIN_PLAYERS: 3
        };

        // ==============================================================
        // ===== الحالة العامة =====
        // ==============================================================
        const S = {
            players: [],
            selectedCategory: null,
            selectedMode: 'traditional',
            secretWord: null,
            oddIndex: null,
            oddWord: null,
            totalQuestionRounds: 6,
            currentQRound: 0,
            qUsedPairs: [],
            currentVoterIdx: 0,
            votes: [],
            roundScores: null,
            rngSeed: Date.now(),
            currentRevealIdx: 0,
            revealFlipped: false,
            usedWords: []
        };

        const OS = {
            supabase: null,
            clientId: null,
            playerName: null,
            roomId: null,
            roomCode: null,
            isHost: false,
            isReady: true,
            myPlayerId: null,
            currentPhase: 'lobby',
            subscriptions: [],
            gameData: null,
            myRole: null,
            myWord: null,
            hasRevealed: false,
            qaRound: 0,
            qaTotalRounds: 0,
            qaRole: null,
            qaQuestion: null,
            qaAnswer: null,
            qaAnswered: false,
            qaTimer: 45,
            qaTimerInterval: null,
            voteSelection: null,
            votesCast: 0,
            suspenseData: null,
            scChosen: null,
            scCorrect: false,
            lbData: null,
            visibility: 'public',
            playerLimit: 6,
            refreshInterval: null,
            authUser: null,
            qaAskerId: null,
            qaRespondentId: null,
            qaQuestionText: null,
            qaAnswerText: null,
            qaPhase: 'waiting',
            qaSpectatorLog: [],
            votingVoters: [],
            votingTargets: [],
            votingIndex: 0,
            votingResults: null,
            suspenseRevealed: false,
            scWordOptions: [],
            scSelected: null,
            scCorrectAnswer: null,
            lastUpdateTimestamp: null,
            usedWords: [],
            isAdvancing: false,
            _qaSpectatorInterval: null,
            _qaWaitInterval: null,
            _qaTimerInterval: null,
            realtimeActive: true,
            _voteInterval: null,
            hostAdvanceLock: false,
            pendingStageTransition: null,
            stageLock: false,
            isReconnecting: false,
            reconnectAttempts: 0,
            stateRestored: false,
            _qaAskerTimer: null,
            _qaRespondentTimer: null,
            _qaRealtimeSetup: false,
            qaRoundComplete: false,
            qaQuestionSubmitted: false,
            qaAnswerSubmitted: false,
            qaStartTime: null,
            revealFlipped: false,
            revealReadyClicked: false,
            readyForNextRound: false,
            hostCategory: null,
            hostMode: null,
            _hostControlsAttached: false
        };

        // ==============================================================
        // ===== دوال مساعدة =====
        // ==============================================================
        function resetButtons() {
            const createBtn = document.getElementById('btn-online-create');
            if (createBtn) {
                createBtn.disabled = false;
                createBtn.innerHTML =
                    `<i class="fa-solid fa-wand-magic-sparkles text-sm"></i> <span>إنشاء الغرفة الآن</span>`;
                createBtn.classList.remove('opacity-70', 'cursor-wait');
            }
            const quickBtn = document.getElementById('btn-online-quick');
            if (quickBtn) {
                quickBtn.disabled = false;
                quickBtn.innerHTML = `<i class="fa-solid fa-bolt text-sm"></i> <span>دخول مباشر</span>`;
                quickBtn.classList.remove('opacity-70', 'cursor-wait');
            }
            const joinBtn = document.getElementById('btn-online-join');
            if (joinBtn) {
                joinBtn.disabled = false;
                joinBtn.innerHTML = `<i class="fa-solid fa-right-to-bracket text-sm"></i> <span>انضمام الآن</span>`;
                joinBtn.classList.remove('opacity-70', 'cursor-wait');
            }
            ButtonManager.resetAll();
        }

        function cleanAlertText(text) {
            if (!text) return text;
            return text.replace(/[\u{1F000}-\u{1FFFF}]/gu, '').trim();
        }

        const $ = s => document.querySelector(s);
        const $$ = s => document.querySelectorAll(s);

        function esc(s) { const d = document.createElement('div');
            d.textContent = s; return d.innerHTML; }

        function hapticLight() { try { if (navigator.vibrate) navigator.vibrate(8); } catch (e) {} }

        function hapticSuccess() { try { if (navigator.vibrate) navigator.vibrate([12, 25, 12]); } catch (e) {} }

        function playSound(type) {
            SoundManager.play(type);
        }

        function hapticAndSound(type) {
            hapticLight();
            playSound(type);
        }

        function hapticSuccessWithSound() {
            hapticSuccess();
            playSound('success');
        }

        function showScreen(name) {
            $$('.screen').forEach(el => el.classList.remove('active'));
            const t = $(`#screen-${name}`);
            if (t) { t.classList.add('active');
                t.style.animation = 'none';
                t.offsetHeight;
                t.style.animation = ''; }
            if (window.lucide) lucide.createIcons();
            const bp = $('#bg-particles');
            if (bp) bp.style.display = (name === 'landing' || name === 'online-lobby') ? 'block' : 'none';
            const shareFab = document.getElementById('share-fab');
            if (shareFab) {
                if (name === 'online-room') {
                    shareFab.classList.remove('hidden');
                } else {
                    shareFab.classList.add('hidden');
                }
            }
            updateHeaderState(name);
            console.log(`🔄 تم الانتقال إلى الشاشة: ${name}`);
        }

        function updateHeaderState(currentScreen) {
            const header = document.getElementById('global-header');
            if (!header) return;
            const hiddenScreens = ['landing'];
            const stickyScreens = ['online-lobby'];
            const slideScreens = ['setup', 'online-room', 'online-reveal', 'online-qa', 'online-voting', 'online-suspense',
                'online-secondchance', 'online-leaderboard', 'secret', 'questioning', 'voting', 'suspense', 'secondchance',
                'leaderboard', 'newround'
            ];

            header.classList.remove('hidden-state', 'slide-state', 'sticky-state');

            if (hiddenScreens.includes(currentScreen)) {
                header.classList.add('hidden-state');
                return;
            }
            if (stickyScreens.includes(currentScreen)) {
                header.classList.add('sticky-state');
                return;
            }
            if (slideScreens.includes(currentScreen)) {
                header.classList.add('hidden-state');
                return;
            }
            header.classList.add('hidden-state');
        }

        function goToLanding() {
            hapticAndSound('click');
            if (OS.roomId) {
                leaveOnlineRoomSilent();
            }
            resetToLanding();
            console.log('🏠 العودة إلى الشاشة الرئيسية');
        }

        function leaveOnlineRoomSilent() {
            try {
                TimerManager.clearAll();
                if (OS.subscriptions) {
                    OS.subscriptions.forEach(sub => {
                        try { sub.unsubscribe(); } catch (e) {}
                    });
                    OS.subscriptions = [];
                }
                if (OS.refreshInterval) {
                    clearInterval(OS.refreshInterval);
                    OS.refreshInterval = null;
                }
                if (pollingInterval) {
                    clearInterval(pollingInterval);
                    pollingInterval = null;
                }
                if (OS._qaAskerTimer) {
                    clearInterval(OS._qaAskerTimer);
                    OS._qaAskerTimer = null;
                }
                if (OS._qaRespondentTimer) {
                    clearInterval(OS._qaRespondentTimer);
                    OS._qaRespondentTimer = null;
                }
                if (window._revealCheckInterval) {
                    clearInterval(window._revealCheckInterval);
                    window._revealCheckInterval = null;
                }
                OS.roomId = null;
                OS.roomCode = null;
                OS.isHost = false;
                OS.myPlayerId = null;
                OS.currentPhase = 'lobby';
                OS.gameData = null;
                OS._qaRealtimeSetup = false;
                OS.revealFlipped = false;
                OS.revealReadyClicked = false;
                OS.readyForNextRound = false;
                localStorage.removeItem('barra_room_id');
                console.log('🚪 تمت المغادرة الصامتة');
            } catch (e) {
                console.warn('⚠️ خطأ في المغادرة الصامتة:', e);
            }
        }

        function resetToLanding() {
            S.players = [];
            S.selectedCategory = Object.keys(WORD_CLUSTERS)[0];
            S.selectedMode = 'traditional';
            S.secretWord = null;
            S.oddIndex = null;
            S.oddWord = null;
            S.roundScores = null;
            S.votes = [];
            S.rngSeed = Date.now();
            S.usedWords = [];
            renderSetup();
            showScreen('landing');
            showToast('تم إعادة ضبط اللعبة', 'info');
            console.log('🔄 تم إعادة ضبط اللعبة بالكامل');
        }

        window.goToLanding = goToLanding;

        function seedRand() { S.rngSeed = (S.rngSeed * 16807 + 0) % 2147483647; return (S.rngSeed - 1) / 2147483646; }

        function randInt(min, max) { return Math.floor(seedRand() * (max - min + 1)) + min; }

        function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(seedRand() * (
                    i + 1));
                [a[i], a[j]] = [a[j], a[i]]; } return a; }

        function avHTML(name, idx, cls = '') {
            const init = name.trim().charAt(0).toUpperCase();
            const col = CFG.AVATAR_COLORS[idx % CFG.AVATAR_COLORS.length];
            const sizeCls = cls === 'sm' ? 'w-7 h-7 text-xs border-[1.5px]' : cls === 'lg' ?
                'w-[54px] h-[54px] text-xl border-[3px]' : 'w-[38px] h-[38px] text-sm border-2';
            return `<span class="inline-flex items-center justify-center rounded-full font-extrabold text-white shrink-0 border-white/20 shadow-[0_2px_10px_rgba(0,0,0,0.3)] ${sizeCls}" style="background:${col};">${init}</span>`;
        }

        // ===== نظام التوست =====
        function showToast(message, type = 'info', duration = 4000) {
            const container = document.getElementById('toast-container');
            if (!container) {
                console.error('❌ حاوية التوست غير موجودة');
                return;
            }

            const icons = {
                info: 'fa-solid fa-circle-info text-cyan-400',
                success: 'fa-solid fa-circle-check text-emerald-400',
                error: 'fa-solid fa-circle-exclamation text-rose-400',
                warning: 'fa-solid fa-triangle-exclamation text-yellow-400'
            };

            function cleanText(text) {
                if (!text) return '';
                let cleaned = text.replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}]/gu, '');
                cleaned = cleaned.replace(/[!؟]/g, '').trim();
                return cleaned;
            }

            const cleanMessage = cleanText(message) || 'تنبيه';
            const item = document.createElement('div');
            item.className = `toast-item ${type}`;
            item.innerHTML = `
                <span class="toast-icon"><i class="${icons[type] || icons.info}"></i></span>
                <span class="toast-msg" style="font-size:0.95rem; line-height:1.5;">${cleanMessage}</span>
            `;
            container.appendChild(item);

            if (type === 'success') playSound('success');
            else if (type === 'error') playSound('error');
            else if (type === 'warning') playSound('timer_warning');

            setTimeout(() => {
                item.classList.add('hiding');
                setTimeout(() => { if (item.parentNode) item.remove(); }, 300);
            }, duration);
        }

        // ===== نظام المودال =====
        let modalCallback = null;

        function showCustomModal(title, message, type = 'info', confirmText = 'تأكيد', cancelText = 'إلغاء', callback = null) {
            const modal = document.getElementById('custom-alert-modal');
            if (!modal) {
                console.error('❌ مودال التنبيهات غير موجود');
                return;
            }

            function cleanText(text) {
                if (!text) return '';
                let cleaned = text.replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}]/gu, '');
                cleaned = cleaned.replace(/[!؟]/g, '').trim();
                return cleaned;
            }
            const cleanTitle = cleanText(title) || 'تنبيه';
            const cleanMessage = cleanText(message) || 'تفاصيل التنبيه...';
            document.getElementById('modal-title').innerText = cleanTitle;
            document.getElementById('modal-message').innerText = cleanMessage;
            modalCallback = callback;
            const t = { success: 'emerald', error: 'rose', info: 'cyan', warning: 'yellow' } [type] || 'cyan';
            document.getElementById('modal-icon').className = t === 'success' ? 'fa-solid fa-circle-check' : t === 'error' ?
                'fa-solid fa-triangle-exclamation' : 'fa-solid fa-circle-info';
            document.getElementById('modal-icon-wrapper').className =
                `w-14 h-14 mx-auto mb-4 rounded-2xl bg-${t}-500/10 border border-${t}-500/30 flex items-center justify-center text-${t}-400 text-2xl`;
            document.getElementById('modal-glow-bg').className =
                `absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-${t}-500/20 rounded-full blur-2xl pointer-events-none`;
            document.getElementById('modal-actions').innerHTML = `
                <button onclick="closeCustomAlert()" class="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-extrabold text-xs rounded-xl border border-slate-700 transition active:scale-95">${cancelText}</button>
                <button id="modal-confirm-btn" onclick="confirmModalAction()" class="flex-1 py-3 bg-${t}-500 hover:bg-${t}-400 text-slate-950 font-extrabold text-xs rounded-xl border border-${t}-500 transition active:scale-95">${confirmText}</button>
            `;
            modal.classList.remove('hidden');
        }

        function closeCustomAlert() { document.getElementById('custom-alert-modal').classList.add('hidden');
            modalCallback = null; }

        function confirmModalAction() { if (modalCallback) { const cb = modalCallback;
                modalCallback = null;
                closeCustomAlert();
                cb(); } else closeCustomAlert(); }

        function showAlert(msg, type = 'info') { showCustomModal('تنبيه', msg, type, 'حسناً', 'إلغاء', null); }

        // ==============================================================
        // ===== نظام المصادقة =====
        // ==============================================================

        function getStoredUser() {
            try {
                const data = JSON.parse(localStorage.getItem('barra_auth_user'));
                if (data && data.username) return data;
            } catch (e) {}
            return null;
        }

        function setStoredUser(username, password) {
            localStorage.setItem('barra_auth_user', JSON.stringify({ username, password: btoa(password) }));
            OS.authUser = { username };
        }

        function clearStoredUser() {
            localStorage.removeItem('barra_auth_user');
            OS.authUser = null;
            OS.playerName = null;
            localStorage.removeItem('barra_player_name');
        }

async function validateStoredUser() {
    const stored = getStoredUser();
    if (!stored) return false;

    const sb = OS.supabase || initSupabase();
    if (!sb) return false;

    try {
        const { data: user, error } = await sb
            .from('users')
            .select('username')
            .eq('username', stored.username)
            .maybeSingle();

        if (error || !user) {
            clearStoredUser();              // ← هذا يمسح localStorage
            localStorage.removeItem('barra_player_name');
            updateProfileUI();
            return false;
        }
        return true;
    } catch (e) {
        console.warn('فشل التحقق من المستخدم:', e);
        return true;
    }
}

        let authCallback = null;

        function showAuthOverlay(callback) {
            const overlay = document.getElementById('auth-overlay');
            if (!overlay) {
                console.error('❌ شاشة المصادقة غير موجودة');
                return;
            }
            document.getElementById('login-username').value = '';
            document.getElementById('login-password').value = '';
            document.getElementById('register-username').value = '';
            document.getElementById('register-password').value = '';
            document.getElementById('register-confirm-password').value = '';

            const alertBox = document.getElementById('auth-alert');
            alertBox.className = 'auth-alert-hidden';

            switchAuthMode('login');

            authCallback = callback;

            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('🔓 تم فتح شاشة المصادقة');
        }

        function hideAuthOverlay() {
            const overlay = document.getElementById('auth-overlay');
            if (overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                console.log('🔒 تم إغلاق شاشة المصادقة');
            }
        }

        function switchAuthMode(mode) {
            const loginView = document.getElementById('login-view');
            const registerView = document.getElementById('register-view');
            const authTitle = document.getElementById('auth-title');
            const authSubtitle = document.getElementById('auth-subtitle');
            const alertBox = document.getElementById('auth-alert');

            alertBox.className = 'auth-alert-hidden';

            if (mode === 'register') {
                loginView.classList.remove('active-view');
                loginView.classList.add('hidden-view');

                registerView.classList.remove('hidden-view');
                registerView.classList.add('active-view');

                authTitle.textContent = 'إنشاء حساب جديد';
                authSubtitle.textContent = 'أنشئ حسابك الآن لتتمكن من اللعب مع أصدقائك';
            } else {
                registerView.classList.remove('active-view');
                registerView.classList.add('hidden-view');

                loginView.classList.remove('hidden-view');
                loginView.classList.add('active-view');

                authTitle.textContent = 'تسجيل الدخول';
                authSubtitle.textContent = 'أهلاً بك مجدداً! ادخل حسابك للمتابعة واللعب أونلاين';
            }
        }

        function togglePasswordVisibility(inputId, icon) {
            const input = document.getElementById(inputId);
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }

        function showAuthAlert(message, type = 'error') {
            const alertBox = document.getElementById('auth-alert');
            const icon = type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check';
            const cssClass = type === 'error' ? 'auth-error-msg' : 'auth-success-msg';

            alertBox.className = cssClass;
            alertBox.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        }

        // ===== معالجة تسجيل الدخول =====
        async function handleLogin(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value;

            if (!username || !password) {
                showToast('يرجى إدخال اسم المستخدم وكلمة المرور', 'warning');
                return;
            }

            if (username.length < 3) {
                showToast('اسم المستخدم يجب أن يكون 3 أحرف على الأقل', 'warning');
                return;
            }

            if (!/^[\u0600-\u06FFa-zA-Z0-9\s\.\-_]+$/.test(username)) {
                showToast('اسم المستخدم يحتوي على أحرف غير مسموحة', 'warning');
                return;
            }

            const btn = document.getElementById('btn-submit-login');
            btn.disabled = true;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>جاري تسجيل الدخول...</span>`;

            const sb = OS.supabase || initSupabase();
            if (!sb) {
                showToast('فشل الاتصال بقاعدة البيانات', 'error');
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> <span>تسجيل الدخول</span>`;
                return;
            }

            try {
                localStorage.removeItem('barra_auth_user');
                OS.authUser = null;

                const { data: user, error } = await sb.from('users')
                    .select('username, password_hash')
                    .eq('username', username)
                    .maybeSingle();

                if (error) {
                    showToast('حدث خطأ في الاتصال: ' + error.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> <span>تسجيل الدخول</span>`;
                    return;
                }

                if (!user) {
                    showToast('لا يوجد حساب بهذا الاسم. يرجى إنشاء حساب جديد', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> <span>تسجيل الدخول</span>`;
                    return;
                }

                if (user.password_hash !== btoa(password)) {
                    showToast('كلمة المرور غير صحيحة. حاول مرة أخرى', 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> <span>تسجيل الدخول</span>`;
                    return;
                }

                setStoredUser(username, password);
                OS.authUser = { username };
                OS.playerName = username;
                localStorage.setItem('barra_player_name', username);
                updateProfileUI();

                showToast('مرحباً بك ' + username + '! تم تسجيل الدخول بنجاح', 'success');
                hapticSuccessWithSound();

                document.getElementById('login-username').value = '';
                document.getElementById('login-password').value = '';

                setTimeout(() => {
                    hideAuthOverlay();
                    if (authCallback) {
                        const cb = authCallback;
                        authCallback = null;
                        cb();
                    }
                }, 600);

            } catch (err) {
                console.error('Login error:', err);
                showToast('حدث خطأ في الاتصال: ' + err.message, 'error');
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> <span>تسجيل الدخول</span>`;
            }
        }

        // ===== معالجة إنشاء الحساب =====
        async function handleRegister(e) {
            e.preventDefault();
            const username = document.getElementById('register-username').value.trim();
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            if (!username || username.length < 3) {
                showToast('اسم المستخدم يجب أن يكون 3 أحرف على الأقل', 'warning');
                return;
            }

            if (!/^[\u0600-\u06FFa-zA-Z0-9\s\.\-_]+$/.test(username)) {
                showToast('اسم المستخدم يحتوي على أحرف غير مسموحة', 'warning');
                return;
            }

            if (password.length < 6) {
                showToast('كلمة المرور يجب أن تكون 6 خانات على الأقل', 'warning');
                return;
            }

            if (!/^[a-zA-Z0-9]+$/.test(password)) {
                showToast('كلمة المرور: أحرف إنجليزية وأرقام فقط', 'warning');
                return;
            }

            if (password !== confirmPassword) {
                showToast('كلمتا المرور غير متطابقتين', 'warning');
                return;
            }

            const btn = document.getElementById('btn-submit-register');
            btn.disabled = true;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>جاري إنشاء الحساب...</span>`;

            const sb = OS.supabase || initSupabase();
            if (!sb) {
                showToast('فشل الاتصال بقاعدة البيانات', 'error');
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-user-check"></i> <span>إنشاء حساب جديد</span>`;
                return;
            }

            try {
                const { data: existing, error: checkErr } = await sb.from('users')
                    .select('username')
                    .eq('username', username)
                    .maybeSingle();

                if (checkErr) {
                    showToast('حدث خطأ في التحقق: ' + checkErr.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-user-check"></i> <span>إنشاء حساب جديد</span>`;
                    return;
                }

                if (existing) {
                    showToast('اسم المستخدم "' + username + '" مستخدم من قبل، اختر اسماً آخر', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-user-check"></i> <span>إنشاء حساب جديد</span>`;
                    return;
                }

                const { error: insertErr } = await sb.from('users').insert({
                    username,
                    password_hash: btoa(password)
                });

                if (insertErr) {
                    if (insertErr.message && insertErr.message.includes('duplicate key')) {
                        showToast('اسم المستخدم "' + username + '" مستخدم من قبل، اختر اسماً آخر', 'warning');
                    } else {
                        showToast('فشل إنشاء الحساب: ' + insertErr.message, 'error');
                    }
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-user-check"></i> <span>إنشاء حساب جديد</span>`;
                    return;
                }

                setStoredUser(username, password);
                OS.authUser = { username };
                OS.playerName = username;
                localStorage.setItem('barra_player_name', username);
                updateProfileUI();

                showToast('تم إنشاء الحساب بنجاح! مرحباً بك ' + username, 'success');
                hapticSuccessWithSound();

                document.getElementById('register-username').value = '';
                document.getElementById('register-password').value = '';
                document.getElementById('register-confirm-password').value = '';

                setTimeout(() => {
                    hideAuthOverlay();
                    if (authCallback) {
                        const cb = authCallback;
                        authCallback = null;
                        cb();
                    }
                }, 800);

            } catch (err) {
                console.error('Register error:', err);
                showToast('حدث خطأ في الاتصال: ' + err.message, 'error');
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-user-check"></i> <span>إنشاء حساب جديد</span>`;
            }
        }

        function requireAuth(callback) {
            const stored = getStoredUser();
            if (stored) {
                OS.authUser = { username: stored.username };
                OS.playerName = stored.username;
                localStorage.setItem('barra_player_name', stored.username);
                updateProfileUI();
                callback();
                return;
            }
            showAuthOverlay(callback);
        }

        function bindAuthEvents() {
            const closeBtn = document.getElementById('auth-close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    hideAuthOverlay();
                    if (authCallback) {
                        authCallback = null;
                    }
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const overlay = document.getElementById('auth-overlay');
                    if (overlay && overlay.classList.contains('active')) {
                        hideAuthOverlay();
                        if (authCallback) {
                            authCallback = null;
                        }
                    }
                }
            });
        }

        // ==============================================================
        // ===== دوال الملف الشخصي =====
        // ==============================================================

        function updateProfileUI() {
            const stored = getStoredUser();
            const nameDisplay = document.getElementById('profile-name-display');
            const avatarLetter = document.getElementById('profile-avatar-letter');
            const avatarMain = document.getElementById('profile-avatar-letter-lg');
            const displayName = document.getElementById('profile-display-name');
            const userHandle = document.getElementById('profile-user-handle');
            const statusText = document.getElementById('profile-status-text-short');
            const statusBadge = document.getElementById('profile-status-badge');
            const editNameInput = document.getElementById('profile-edit-name');
            const onlineDot = document.getElementById('profile-online-dot');

            if (stored) {
                const username = stored.username;
                nameDisplay.textContent = username;
                nameDisplay.classList.remove('hidden', 'md:inline-block');
                const initial = username.charAt(0).toUpperCase();
                avatarLetter.textContent = initial;
                avatarMain.textContent = initial;
                displayName.textContent = username;
                userHandle.textContent = `@${username}`;
                statusText.textContent = 'مسجل';
                statusBadge.className = 'profile-status-badge';
                statusBadge.innerHTML =
                    `<i class="fa-solid fa-circle-check"></i><span id="profile-status-text-short">مسجل</span>`;
                if (onlineDot) onlineDot.className = 'online-dot';
                editNameInput.value = username;
            } else {
                nameDisplay.textContent = 'زائر';
                nameDisplay.classList.remove('hidden', 'md:inline-block');
                avatarLetter.textContent = '👤';
                avatarMain.textContent = '👤';
                displayName.textContent = 'زائر';
                userHandle.textContent = '@زائر';
                statusText.textContent = 'غير مسجل';
                statusBadge.className = 'profile-status-badge offline';
                statusBadge.innerHTML =
                    `<i class="fa-solid fa-circle"></i><span id="profile-status-text-short">غير مسجل</span>`;
                if (onlineDot) onlineDot.className = 'online-dot offline';
                editNameInput.value = '';
            }
        }

        async function showProfileModal() {
    const modal = document.getElementById('profile-modal');
    const stored = getStoredUser();

    if (!stored) {
        requireAuth(() => {});
        return;
    }

    // تحقق من صحة المستخدم في قاعدة البيانات
    const valid = await validateStoredUser();
    if (!valid) {
        clearStoredUser();
        updateProfileUI();
        requireAuth(() => {});
        return;
    }

    // باقي الكود كما هو (تعبئة الحقول، إظهار المودال...)
    document.getElementById('profile-edit-name').value = stored.username;
    document.getElementById('profile-old-password').value = '';
    document.getElementById('profile-new-password').value = '';
    document.getElementById('profile-confirm-password').value = '';

    const msg = document.getElementById('profile-message');
    msg.className = 'profile-msg hidden';
    msg.textContent = '';

    updateProfileUI();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    hapticAndSound('click');
}

        function hideProfileModal() {
            const modal = document.getElementById('profile-modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function showProfileMessage(message, type = 'success') {
            const msg = document.getElementById('profile-message');
            const container = document.getElementById('profile-message-container');

            msg.className = `profile-msg ${type}`;
            msg.textContent = message;
            msg.classList.remove('hidden');

            if (type === 'success') playSound('success');
            else if (type === 'error') playSound('error');

            clearTimeout(msg._timeout);
            msg._timeout = setTimeout(() => {
                msg.classList.add('hidden');
            }, 5000);
        }

        async function handleUpdateName() {
            const input = document.getElementById('profile-edit-name');
            const newName = input.value.trim();

            if (!newName) {
                showToast('الرجاء إدخال اسم مستخدم صالح', 'warning');
                return;
            }
            if (newName.length < 3) {
                showToast('اسم المستخدم يجب أن يكون 3 أحرف على الأقل', 'warning');
                return;
            }
            if (!/^[\u0600-\u06FFa-zA-Z0-9\s\.\-_]+$/.test(newName)) {
                showToast('اسم المستخدم: أحرف عربية/إنجليزية، أرقام، مسافات، نقاط، شرطات فقط', 'warning');
                return;
            }

            const stored = getStoredUser();
            if (!stored) {
                showToast('يجب تسجيل الدخول أولاً', 'warning');
                return;
            }

            if (newName === stored.username) {
                showToast('الاسم مطابق للاسم الحالي', 'info');
                return;
            }

            const sb = OS.supabase || initSupabase();
            if (!sb) {
                showToast('فشل الاتصال بقاعدة البيانات', 'error');
                return;
            }

            const btn = document.getElementById('profile-update-name');
            btn.disabled = true;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

            try {
                const { data: existing, error: checkErr } = await sb.from('users').select('username')
                    .eq('username', newName).maybeSingle();

                if (checkErr) {
                    showToast('خطأ في التحقق: ' + checkErr.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
                    return;
                }

                if (existing) {
                    showToast('اسم المستخدم "' + newName + '" موجود بالفعل', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
                    return;
                }

                const { error: updateErr } = await sb.from('users')
                    .update({ username: newName })
                    .eq('username', stored.username);

                if (updateErr) {
                    showToast('فشل تحديث الاسم: ' + updateErr.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
                    return;
                }

                setStoredUser(newName, atob(stored.password));
                OS.authUser = { username: newName };
                OS.playerName = newName;
                localStorage.setItem('barra_player_name', newName);
                updateProfileUI();

                showToast('تم تحديث اسم المستخدم إلى "' + newName + '"', 'success');
                hapticSuccessWithSound();

                if (OS.roomId && OS.myPlayerId) {
                    try {
                        await sb.from('room_players')
                            .update({ player_name: newName })
                            .eq('id', OS.myPlayerId);
                    } catch (e) {
                        console.warn('⚠️ فشل تحديث اسم اللاعب في الغرفة:', e);
                    }
                }

            } catch (e) {
                showToast('حدث خطأ: ' + e.message, 'error');
                console.error('Update name error:', e);
            } finally {
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
            }
        }

        async function handleChangePassword() {
            const oldPass = document.getElementById('profile-old-password').value;
            const newPass = document.getElementById('profile-new-password').value;
            const confirmPass = document.getElementById('profile-confirm-password').value;

            if (!oldPass || !newPass || !confirmPass) {
                showToast('الرجاء تعبئة جميع الحقول', 'warning');
                return;
            }

            if (newPass.length < 6) {
                showToast('كلمة المرور الجديدة يجب أن تكون 6 خانات على الأقل', 'warning');
                return;
            }

            if (!/^[a-zA-Z0-9]+$/.test(newPass)) {
                showToast('كلمة المرور: أحرف إنجليزية وأرقام فقط (بدون مسافات أو رموز)', 'warning');
                return;
            }

            if (newPass !== confirmPass) {
                showToast('كلمتا المرور الجديدة غير متطابقتين', 'warning');
                return;
            }

            const stored = getStoredUser();
            if (!stored) {
                showToast('يجب تسجيل الدخول أولاً', 'warning');
                return;
            }

            const sb = OS.supabase || initSupabase();
            if (!sb) {
                showToast('فشل الاتصال بقاعدة البيانات', 'error');
                return;
            }

            const btn = document.getElementById('profile-change-password');
            btn.disabled = true;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جاري التغيير...`;

            try {
                const { data: user, error } = await sb.from('users').select('password_hash')
                    .eq('username', stored.username).maybeSingle();

                if (error || !user) {
                    showToast('حدث خطأ في التحقق من المستخدم', 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-rotate"></i> تغيير كلمة المرور`;
                    return;
                }

                if (user.password_hash !== btoa(oldPass)) {
                    showToast('كلمة المرور الحالية غير صحيحة', 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-rotate"></i> تغيير كلمة المرور`;
                    return;
                }

                const { error: updateErr } = await sb.from('users')
                    .update({ password_hash: btoa(newPass) })
                    .eq('username', stored.username);

                if (updateErr) {
                    showToast('فشل تغيير كلمة المرور: ' + updateErr.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-rotate"></i> تغيير كلمة المرور`;
                    return;
                }

                setStoredUser(stored.username, newPass);
                showToast('تم تغيير كلمة المرور بنجاح', 'success');
                hapticSuccessWithSound();

                document.getElementById('profile-old-password').value = '';
                document.getElementById('profile-new-password').value = '';
                document.getElementById('profile-confirm-password').value = '';

            } catch (e) {
                showToast('حدث خطأ: ' + e.message, 'error');
                console.error('Change password error:', e);
            } finally {
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-rotate"></i> تغيير كلمة المرور`;
            }
        }

        function handleLogout() {
            hideProfileModal();

            setTimeout(() => {
                showCustomModal('تسجيل الخروج', 'هل أنت متأكد من تسجيل الخروج؟', 'warning', 'نعم، سجل خروج', 'إلغاء', () => {
                    clearStoredUser();
                    OS.authUser = null;
                    OS.playerName = null;
                    localStorage.removeItem('barra_player_name');
                    localStorage.removeItem('barra_auth_user');

                    if (OS.roomId) {
                        leaveOnlineRoomSilent();
                        showScreen('landing');
                    }

                    updateProfileUI();
                    showToast('تم تسجيل الخروج بنجاح', 'info');
                    hapticAndSound('click');

                    document.getElementById('auth-overlay').classList.remove('active');
                    document.body.style.overflow = '';

                    document.getElementById('login-username').value = '';
                    document.getElementById('login-password').value = '';
                    document.getElementById('register-username').value = '';
                    document.getElementById('register-password').value = '';
                    document.getElementById('register-confirm-password').value = '';

                    setTimeout(() => {
                        showAuthOverlay(() => {});
                    }, 300);
                });
            }, 300);
        }

        // ==============================================================
        // ===== دوال الأونلاين =====
        // ==============================================================

        function initSupabase() {
            if (!SUPABASE_URL || SUPABASE_URL.includes('YOUR_PROJECT')) {
                showAlert('⚠️ يرجى إعداد Supabase أولاً!', 'error');
                return null;
            }
            try {
                const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                OS.supabase = sb;
                return sb;
            } catch (e) {
                console.error('Supabase init error:', e);
                showAlert('❌ فشل الاتصال بـ Supabase: ' + e.message, 'error');
                return null;
            }
        }

        function getClientId() {
            let id = localStorage.getItem('barra_client_id');
            if (!id) {
                let uuid;
                try { if (typeof crypto !== 'undefined' && crypto.randomUUID) { uuid = crypto.randomUUID(); } else { uuid =
                        'client_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); } } catch (e) { uuid =
                        'client_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); }
                id = uuid;
                localStorage.setItem('barra_client_id', id);
            }
            return id;
        }

        function generateRoomCode() { return String(100000 + Math.floor(Math.random() * 900000)); }

        // ===== دوال الغرف العامة =====
        async function fetchPublicRooms() {
            const sb = OS.supabase;
            if (!sb) return [];
            try {
                const { data: rooms, error } = await sb.from('rooms').select('*').eq('is_public', true).eq('status',
                    'lobby').order('created_at', { ascending: false });
                if (error || rooms.length === 0) return [];

                const roomIds = rooms.map(r => r.id);
                const { data: players, error: pErr } = await sb.from('room_players').select('room_id, client_id, player_name')
                    .in('room_id', roomIds);
                if (pErr) return rooms.map(r => ({ ...r, host_name: 'غير معروف', player_count: 0 }));

                const hostMap = {},
                    countMap = {};
                players.forEach(p => { if (!countMap[p.room_id]) countMap[p.room_id] = 0;
                    countMap[p.room_id]++; });
                rooms.forEach(r => {
                    const hostPlayer = players.find(p => p.client_id === r.host_id && p.room_id === r.id);
                    hostMap[r.id] = hostPlayer ? hostPlayer.player_name : 'غير معروف';
                });
                return rooms.map(r => ({ ...r, host_name: hostMap[r.id] || 'غير معروف', player_count: countMap[r.id] ||
                        0 }));
            } catch (e) { console.error('fetchPublicRooms exception:', e); return []; }
        }

        async function renderPublicRooms() {
            const refreshBtn = document.getElementById('btn-refresh-rooms');
            const originalHTML = refreshBtn?.innerHTML;

            if (refreshBtn) {
                refreshBtn.disabled = true;
                refreshBtn.innerHTML =
                    `<i class="fa-solid fa-spinner fa-spin text-cyan-400"></i><span>جاري التحديث...</span>`;
            }

            try {
                const rooms = await fetchPublicRooms();
                const list = document.getElementById('online-public-list');
                if (!rooms || rooms.length === 0) {
                    list.innerHTML = '<div class="text-slate-500 text-sm text-center py-8">لا توجد غرف عامة حالياً</div>';
                    return;
                }
                list.innerHTML = rooms.map(r => {
                    const count = r.player_count || 0;
                    const max = r.max_players || 6;
                    const modeName = r.mode === 'mindbending' ? 'ذهني' : 'تقليدي';
                    const isFull = count >= max;
                    return `
                                <div class="room-card" data-code="${r.code}">
                                    <div class="room-info">
                                        <div class="room-name">
                                            <i class="fa-solid fa-gamepad room-icon"></i>
                                            <span>${esc(r.name)}</span>
                                            <span class="room-code">#${r.code}</span>
                                        </div>
                                        <div class="room-meta">
                                            <span class="meta-host"><i class="fa-solid fa-crown" style="color:#fbbf24;"></i> ${esc(r.host_name)}</span>
                                            <span class="meta-mode"><i class="fa-solid fa-${r.mode === 'mindbending' ? 'brain' : 'masks-theater'}"></i> ${modeName}</span>
                                            <span class="meta-players"><i class="fa-solid fa-users"></i> ${count}/${max}</span>
                                            ${isFull ? '<span class="text-rose-400 text-xs font-bold"><i class="fa-solid fa-circle-exclamation"></i> ممتلئة</span>' : ''}
                                        </div>
                                    </div>
                                    <button class="join-btn" data-code="${r.code}" ${isFull ? 'disabled' : ''}>
                                        <i class="fa-solid fa-${isFull ? 'circle-xmark' : 'right-to-bracket'} btn-icon"></i>
                                        ${isFull ? 'ممتلئة' : 'انضمام'}
                                    </button>
                                </div>`;
                }).join('');

                list.querySelectorAll('.join-btn').forEach(btn => {
                    btn.addEventListener('click', async () => {
                        if (btn.disabled) return;
                        const code = btn.dataset.code;
                        const originalHTML = btn.innerHTML;
                        btn.disabled = true;
                        btn.innerHTML =
                            `<i class="fa-solid fa-spinner fa-spin btn-icon"></i> جاري الانضمام...`;
                        btn.classList.add('opacity-70', 'cursor-wait');
                        try {
                            await joinOnlineRoom(code);
                            hapticAndSound('click');
                        } catch (e) {
                            console.error('Join error:', e);
                            btn.disabled = false;
                            btn.innerHTML = originalHTML;
                            btn.classList.remove('opacity-70', 'cursor-wait');
                        }
                    });
                });

            } catch (e) {
                console.error('renderPublicRooms error:', e);
                showToast('❌ فشل تحديث الغرف: ' + e.message, 'error');
            } finally {
                if (refreshBtn) {
                    refreshBtn.disabled = false;
                    refreshBtn.innerHTML = originalHTML ||
                        `<i class="fa-solid fa-rotate text-[10px] text-cyan-400"></i><span>تحديث</span>`;
                }
            }
        }

        // ===== إنشاء غرفة =====
        async function createOnlineRoom(roomName, isPublic) {
            const sb = OS.supabase;
            if (!sb) return null;
            if (!OS.playerName) {
                showToast('يرجى تسجيل الدخول أولاً', 'warning');
                return null;
            }

            const code = generateRoomCode();
            const clientId = getClientId();
            const playerName = OS.playerName;

            try {
                const { data: room, error: roomErr } = await sb.from('rooms').insert({
                    code,
                    name: roomName || 'غرفة جديدة',
                    host_id: clientId,
                    is_public: isPublic !== false,
                    status: 'lobby',
                    max_players: OS.playerLimit || 6,
                    category: OS.hostCategory || Object.keys(WORD_CLUSTERS)[0],
                    mode: OS.hostMode || 'traditional',
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }).select().single();
                if (roomErr) {
                    showAlert('❌ فشل إنشاء الغرفة: ' + roomErr.message, 'error');
                    resetButtons();
                    return null;
                }

                const { data: player, error: playerErr } = await sb.from('room_players').insert({
                    room_id: room.id,
                    player_name: playerName,
                    client_id: clientId,
                    is_ready: true,
                    ready_for_next_round: false,
                    total_score: 0,
                    is_odd: false,
                    has_revealed: false,
                    created_at: new Date().toISOString()
                }).select().single();
                if (playerErr) {
                    showAlert('❌ فشل إضافة اللاعب: ' + playerErr.message, 'error');
                    resetButtons();
                    return null;
                }

                OS.roomId = room.id;
                OS.roomCode = code;
                OS.isHost = true;
                OS.myPlayerId = player.id;
                OS.clientId = clientId;
                OS.playerName = playerName;
                OS.currentPhase = 'lobby';
                OS.isReady = true;
                OS.hasRevealed = false;
                OS.revealFlipped = false;
                OS.revealReadyClicked = false;
                OS.readyForNextRound = false;
                OS.hostCategory = room.category;
                OS.hostMode = room.mode;
                localStorage.setItem('barra_room_id', room.id);

                subscribeToRoom(room.id);
                subscribeToPlayers(room.id);

                renderOnlineRoom();
                showScreen('online-room');
                showToast(`✅ تم إنشاء الغرفة! الكود: ${code}`, 'success');
                hapticSuccessWithSound();
                playSound('game_start');
                return room;
            } catch (e) {
                console.error('Create room exception:', e);
                showAlert('❌ خطأ في الاتصال: ' + e.message, 'error');
                resetButtons();
                return null;
            }
        }

        // ===== الانضمام لغرفة =====
        async function joinOnlineRoom(code) {
            const sb = OS.supabase;
            if (!sb) return null;
            if (!OS.playerName) {
                showToast('يرجى تسجيل الدخول أولاً', 'warning');
                return null;
            }

            const clientId = getClientId();
            const playerName = OS.playerName;

            try {
                const { data: room, error: roomErr } = await sb.from('rooms').select('*').eq('code', code).maybeSingle();
                if (roomErr || !room) { showToast('❌ غرفة غير موجودة', 'error'); return null; }

                if (room.status !== 'lobby' && room.status !== 'leaderboard') {
                    showAlert('⚠️ اللعبة بدأت بالفعل، لا يمكن الانضمام الآن.', 'warning');
                    return null;
                }

                const { data: existingPlayers } = await sb.from('room_players').select('id').eq('room_id', room.id);
                if (existingPlayers && existingPlayers.length >= (room.max_players || 6)) {
                    showToast('⚠️ الغرفة ممتلئة!', 'warning');
                    return null;
                }

                const { data: existing } = await sb.from('room_players').select('*').eq('room_id', room.id).eq('client_id',
                    clientId).maybeSingle();
                if (existing) {
                    if (!existing.is_ready) await sb.from('room_players').update({ is_ready: true }).eq('id', existing.id);
                    OS.roomId = room.id;
                    OS.roomCode = code;
                    OS.isHost = (room.host_id === clientId);
                    OS.myPlayerId = existing.id;
                    OS.clientId = clientId;
                    OS.playerName = existing.player_name;
                    OS.currentPhase = room.status;
                    OS.isReady = true;
                    OS.hasRevealed = existing.has_revealed || false;
                    OS.revealFlipped = false;
                    OS.revealReadyClicked = false;
                    OS.readyForNextRound = existing.ready_for_next_round || false;
                    OS.hostCategory = room.category;
                    OS.hostMode = room.mode;
                    localStorage.setItem('barra_room_id', room.id);
                    subscribeToRoom(room.id);
                    subscribeToPlayers(room.id);
                    renderOnlineRoom();
                    showScreen('online-room');
                    showToast('✅ أنت بالفعل في هذه الغرفة', 'success');
                    hapticAndSound('click');
                    return room;
                }

                const { data: player, error: playerErr } = await sb.from('room_players').insert({
                    room_id: room.id,
                    player_name: playerName,
                    client_id: clientId,
                    is_ready: true,
                    ready_for_next_round: false,
                    total_score: 0,
                    is_odd: false,
                    has_revealed: false,
                    created_at: new Date().toISOString()
                }).select().single();
                if (playerErr) { showAlert('❌ فشل الانضمام: ' + playerErr.message, 'error'); return null; }

                OS.roomId = room.id;
                OS.roomCode = code;
                OS.isHost = (room.host_id === clientId);
                OS.myPlayerId = player.id;
                OS.clientId = clientId;
                OS.playerName = playerName;
                OS.currentPhase = room.status || 'lobby';
                OS.isReady = true;
                OS.hasRevealed = false;
                OS.revealFlipped = false;
                OS.revealReadyClicked = false;
                OS.readyForNextRound = false;
                OS.hostCategory = room.category;
                OS.hostMode = room.mode;
                localStorage.setItem('barra_room_id', room.id);
                subscribeToRoom(room.id);
                subscribeToPlayers(room.id);
                renderOnlineRoom();
                showScreen('online-room');
                showToast(`✅ انضممت إلى ${room.name}`, 'success');
                hapticAndSound('click');
                return room;
            } catch (e) {
                console.error('Join room exception:', e);
                showAlert('❌ خطأ في الاتصال: ' + e.message, 'error');
                return null;
            }
        }

        // ===== دخول سريع =====
        async function quickJoin() {
            const btn = document.getElementById('btn-online-quick');
            const originalHTML = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جاري البحث...`;
            btn.classList.add('opacity-70', 'cursor-wait');

            const sb = OS.supabase;
            if (!sb) {
                showToast('❌ Supabase غير مهيأ', 'error');
                btn.disabled = false;
                btn.innerHTML = originalHTML;
                btn.classList.remove('opacity-70', 'cursor-wait');
                return;
            }
            if (!OS.playerName) {
                showToast('يرجى تسجيل الدخول أولاً', 'warning');
                btn.disabled = false;
                btn.innerHTML = originalHTML;
                btn.classList.remove('opacity-70', 'cursor-wait');
                return;
            }

            try {
                const { data: rooms, error } = await sb.from('rooms').select('*, room_players(count)').eq('is_public', true)
                    .eq('status', 'lobby').order('created_at', { ascending: false });
                if (error) {
                    showAlert('❌ فشل البحث عن غرف: ' + error.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    btn.classList.remove('opacity-70', 'cursor-wait');
                    return;
                }

                let targetRoom = null;
                for (const room of rooms) {
                    const count = room.room_players?.[0]?.count || 0;
                    const max = room.max_players || 6;
                    if (count < max) { targetRoom = room; break; }
                }

                if (!targetRoom) {
                    showToast('⚠️ لا توجد غرف متاحة حالياً. حاول إنشاء غرفة جديدة.', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    btn.classList.remove('opacity-70', 'cursor-wait');
                    return;
                }

                btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جاري الانضمام...`;
                await joinOnlineRoom(targetRoom.code);

            } catch (e) {
                console.error('Quick join error:', e);
                showAlert('❌ خطأ في الدخول السريع: ' + e.message, 'error');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalHTML;
                btn.classList.remove('opacity-70', 'cursor-wait');
            }
        }

        // ===== عرض اللوبي =====
        function showOnlineLobby() {
            resetButtons();
            showScreen('online-lobby');

            const catSelect = document.getElementById('online-host-category');
            if (catSelect) {
                catSelect.innerHTML = Object.keys(WORD_CLUSTERS).map(c =>
                    `<option value="${esc(c)}">${esc(c)}</option>`).join('');
            }

            renderPublicRooms();

            if (OS.refreshInterval) {
                clearInterval(OS.refreshInterval);
                OS.refreshInterval = null;
            }

            OS.refreshInterval = setInterval(() => {
                const isLobbyScreen = document.getElementById('screen-online-lobby')?.classList.contains('active');
                if (isLobbyScreen) {
                    renderPublicRooms();
                }
            }, 10000);

            if (window.lucide) lucide.createIcons();
        }

        // ===== دالة تحديث إعدادات الغرفة (الفئة والوضع) =====
        async function updateRoomSettings(category, mode) {
            const sb = OS.supabase;
            if (!sb || !OS.roomId || !OS.isHost) return;
            try {
                await sb.from('rooms')
                    .update({
                        category: category,
                        mode: mode,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', OS.roomId);
                OS.hostCategory = category;
                OS.hostMode = mode;
                console.log('✅ تم تحديث إعدادات الغرفة:', { category, mode });
            } catch (e) {
                console.error('❌ فشل تحديث الإعدادات:', e);
            }
        }

        // ===== عرض الغرفة =====
        async function renderOnlineRoom() {
            const sb = OS.supabase;
            if (!sb || !OS.roomId) return;

            try {
                const { data: room, error: roomErr } = await sb.from('rooms').select('*').eq('id', OS.roomId).single();
                if (roomErr || !room) { showAlert('⚠️ الغرفة غير موجودة', 'warning');
                    leaveOnlineRoom(); return; }

                const { data: players, error: playerErr } = await sb.from('room_players').select('*').eq('room_id', OS
                    .roomId).order('created_at', { ascending: true });
                if (playerErr) { console.error('Fetch players error:', playerErr); return; }

                OS.gameData = { room, players };
                const isHost = (room.host_id === OS.clientId);
                OS.isHost = isHost;
                OS.hostCategory = room.category;
                OS.hostMode = room.mode;

                document.getElementById('online-room-title').textContent = `🏠 ${esc(room.name)}`;
                const codeBadge = document.getElementById('online-room-code-badge');
                codeBadge.textContent = room.code;

                const shareCodeSpan = document.getElementById('share-room-code');
                if (shareCodeSpan) {
                    shareCodeSpan.textContent = room.code;
                }

                const copyBtn = document.getElementById('btn-copy-code');
                if (copyBtn) {
                    copyBtn.onclick = () => {
                        const code = room.code;
                        navigator.clipboard.writeText(code).then(() => {
                            showToast('✅ تم نسخ الكود: ' + code, 'success');
                            hapticAndSound('click');
                            copyBtn.className =
                                'fa-solid fa-check text-emerald-400 cursor-pointer transition-all text-base hover:scale-110 ml-2';
                            copyBtn.style.textShadow = '0 0 20px rgba(16,185,129,0.3)';
                            setTimeout(() => {
                                copyBtn.className =
                                    'fa-regular fa-copy text-slate-400 hover:text-cyan-400 cursor-pointer transition-all text-base hover:scale-110 ml-2';
                                copyBtn.style.textShadow = 'none';
                            }, 2500);
                        }).catch(() => {
                            const temp = document.createElement('input');
                            temp.value = code;
                            document.body.appendChild(temp);
                            temp.select();
                            document.execCommand('copy');
                            temp.remove();
                            showToast('✅ تم نسخ الكود: ' + code, 'success');
                            copyBtn.className =
                                'fa-solid fa-check text-emerald-400 cursor-pointer transition-all text-base hover:scale-110 ml-2';
                            copyBtn.style.textShadow = '0 0 20px rgba(16,185,129,0.3)';
                            setTimeout(() => {
                                copyBtn.className =
                                    'fa-regular fa-copy text-slate-400 hover:text-cyan-400 cursor-pointer transition-all text-base hover:scale-110 ml-2';
                                copyBtn.style.textShadow = 'none';
                            }, 2500);
                        });
                    };
                }
                document.getElementById('online-room-player-count').textContent = `${players.length} لاعب`;

                const list = document.getElementById('online-player-list');
                list.innerHTML = players.map(p => {
                    const isMe = p.client_id === OS.clientId;
                    const idx = players.indexOf(p);
                    let cls = 'player-card ready';
                    if (p.client_id === room.host_id) cls += ' host';
                    if (isMe) cls += ' me';
                    const label = p.client_id === room.host_id ? `<i class="fa-solid fa-crown text-xs"></i>` : '';
                    const meLabel = isMe ? ' (أنت)' : '';
                    return `<div class="${cls}">
                            ${avHTML(p.player_name, idx, 'sm')}
                            <span class="text-sm font-bold text-slate-200 flex-1">${esc(p.player_name)}${meLabel}</span>
                            ${label ? `<span class="text-xs">${label}</span>` : ''}
                            <span class="status-dot ready"></span>
                        </div>`;
                }).join('');

                // ===== عناصر التحكم للمضيف مع تثبيت الإعدادات =====
                const hostCtrls = document.getElementById('online-host-controls');
                if (isHost && room.status === 'lobby') {
                    hostCtrls.classList.remove('hidden');
                    const catSelect = document.getElementById('online-host-category');
                    const modeSelect = document.getElementById('online-host-mode');

                    const defaultCategory = Object.keys(WORD_CLUSTERS)[0];
                    catSelect.value = room.category || defaultCategory;
                    modeSelect.value = room.mode || 'traditional';

                    if (OS._hostControlsAttached) {
                        catSelect.onchange = null;
                        modeSelect.onchange = null;
                    }

                    catSelect.onchange = () => {
                        const newCat = catSelect.value;
                        const newMode = modeSelect.value;
                        updateRoomSettings(newCat, newMode);
                        hostUpdateUIControls(players, room);
                    };
                    modeSelect.onchange = () => {
                        const newCat = catSelect.value;
                        const newMode = modeSelect.value;
                        updateRoomSettings(newCat, newMode);
                        hostUpdateUIControls(players, room);
                    };
                    OS._hostControlsAttached = true;

                    hostUpdateUIControls(players, room);

                    const startBtn = document.getElementById('btn-online-host-start');
                    startBtn.onclick = () => {
                        hostStartGame();
                    };
                } else {
                    hostCtrls.classList.add('hidden');
                    OS._hostControlsAttached = false;
                }

                const waitMsg = document.getElementById('online-room-waiting');
                if (room.status === 'lobby') {
                    waitMsg.textContent =
                        `⏳ في انتظار وصول باقي اللاعبين... (${players.length}/${room.max_players||6})`;
                    waitMsg.style.display = 'block';
                } else {
                    waitMsg.style.display = 'none';
                }

                if (OS.roomId) {
                    lastPhase = room.status;
                    startPolling(OS.roomId);
                }

                if (window.lucide) lucide.createIcons();
            } catch (e) { console.error('Render room error:', e); }
        }

        // ===== دوال المضيف =====
        function hostUpdateUIControls(players, room) {
            if (!OS.isHost || !room) return;
            if (room.status !== 'lobby') return;

            const hostHint = document.getElementById('online-host-hint');
            const startBtn = document.getElementById('btn-online-host-start');

            if (!hostHint || !startBtn) return;

            const allReady = players.every(p => p.is_ready === true);
            const enoughPlayers = players.length >= CFG.MIN_PLAYERS;

            if (players.length < CFG.MIN_PLAYERS) {
                startBtn.disabled = true;
                hostHint.textContent = `⏳ يحتاج ${CFG.MIN_PLAYERS} لاعبين على الأقل (${players.length} حالياً)`;
            } else if (!allReady) {
                const readyCount = players.filter(p => p.is_ready).length;
                startBtn.disabled = true;
                hostHint.textContent =
                    `⏳ في انتظار ${players.length - readyCount} لاعبين للاستعداد (${readyCount}/${players.length})`;
            } else {
                startBtn.disabled = false;
                hostHint.innerHTML =
                    `<i class="fa-solid fa-check-circle text-emerald-400 ml-1"></i> جميع اللاعبين جاهزون! اضغط للبدء`;
            }
        }

        // ===== بدء اللعبة من المضيف =====
        async function hostStartGame() {
            const sb = OS.supabase;
            if (!sb || !OS.roomId || !OS.isHost) return;

            const startBtn = document.getElementById('btn-online-host-start');
            if (startBtn.disabled) return;

            if (ButtonManager.isDisabled('btn-online-host-start')) return;
            ButtonManager.disable('btn-online-host-start', 'جاري البدء...');

            try {
                const categorySelect = document.getElementById('online-host-category');
                const modeSelect = document.getElementById('online-host-mode');

                let selectedCategory = categorySelect ? categorySelect.value : null;
                let selectedMode = modeSelect ? modeSelect.value : null;

                if (!selectedCategory || !WORD_CLUSTERS[selectedCategory]) {
                    const categories = Object.keys(WORD_CLUSTERS);
                    selectedCategory = categories[0] || 'أكلات';
                    if (categorySelect) categorySelect.value = selectedCategory;
                }

                if (!selectedMode || !['traditional', 'mindbending'].includes(selectedMode)) {
                    selectedMode = 'traditional';
                    if (modeSelect) modeSelect.value = selectedMode;
                }

                await updateRoomSettings(selectedCategory, selectedMode);

                console.log(`🎯 المضيف بدأ اللعبة: الفئة=${selectedCategory}, النمط=${selectedMode}`);

                const { data: players, error: pErr } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
                if (pErr || !players || players.length < CFG.MIN_PLAYERS) {
                    showToast(`⚠️ تحتاج ${CFG.MIN_PLAYERS} لاعبين على الأقل`, 'warning');
                    ButtonManager.enable('btn-online-host-start');
                    return;
                }

                const clusters = WORD_CLUSTERS[selectedCategory];
                if (!clusters || clusters.length === 0) {
                    showToast(`⚠️ لا توجد كلمات في الفئة "${selectedCategory}"`, 'error');
                    ButtonManager.enable('btn-online-host-start');
                    return;
                }

                const availableClusters = clusters.filter(cluster => !OS.usedWords?.includes(cluster[0]));
                let cluster;
                if (availableClusters.length === 0) {
                    OS.usedWords = [];
                    cluster = clusters[randInt(0, clusters.length - 1)];
                } else {
                    cluster = availableClusters[randInt(0, availableClusters.length - 1)];
                }
                const secretWord = cluster[0];
                if (!OS.usedWords) OS.usedWords = [];
                OS.usedWords.push(secretWord);

                const oddIdx = randInt(0, players.length - 1);
                const oddPlayerId = players[oddIdx].id;
                let oddWord = null;
                if (selectedMode === 'mindbending') {
                    const related = cluster.slice(1);
                    oddWord = related[randInt(0, related.length - 1)];
                }

                const totalRounds = players.length;

                const updateData = {
                    status: 'reveal',
                    category: selectedCategory,
                    mode: selectedMode,
                    secret_word: secretWord,
                    odd_player_id: oddPlayerId,
                    odd_word: oddWord,
                    current_round: 0,
                    total_rounds: totalRounds,
                    qa_phase: 'waiting',
                    qa_round: 0,
                    qa_total_rounds: totalRounds,
                    qa_asker_id: null,
                    qa_respondent_id: null,
                    qa_question: null,
                    qa_answer: null,
                    qa_answered: false,
                    qa_question_submitted: false,
                    qa_answer_submitted: false,
                    qa_round_complete: false,
                    qa_start_time: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                };

                console.log('📝 تحديث الغرفة بالبيانات:', updateData);

                await sb.from('rooms').update(updateData).eq('id', OS.roomId);

                await sb.from('room_players').update({ is_odd: true, has_revealed: false, ready_for_next_round: false })
                    .eq('id', oddPlayerId);
                await sb.from('room_players').update({ is_odd: false, has_revealed: false, ready_for_next_round: false })
                    .eq('room_id', OS.roomId).neq('id', oddPlayerId);

                let retries = 0;
                let confirmed = false;
                let roomData = null;

                while (retries < 10 && !confirmed) {
                    await new Promise(resolve => setTimeout(resolve, 300));
                    const { data: check, error: checkErr } = await sb.from('rooms').select('*').eq('id', OS.roomId)
                        .single();
                    if (checkErr) {
                        console.error('❌ خطأ في التحقق من تحديث الغرفة:', checkErr);
                        retries++;
                        continue;
                    }
                    if (check && check.status === 'reveal') {
                        confirmed = true;
                        roomData = check;
                        break;
                    }
                    retries++;
                }

                if (confirmed) {
                    console.log('✅ تم بدء اللعبة بنجاح!');
                    console.log(`📌 الفئة المحفوظة: ${roomData.category}`);
                    console.log(`📌 الوضع المحفوظ: ${roomData.mode}`);

                    showToast(`🚀 بدأت اللعبة! الفئة: ${selectedCategory} | الوضع: ${selectedMode === 'traditional' ? 'تقليدي' : 'ذهني'}`, 'success');
                    hapticSuccessWithSound();
                    playSound('game_start');
                    OS.currentPhase = 'reveal';
                    lastPhase = 'reveal';

                    const { data: allPlayers } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
                    OS.gameData = { room: roomData, players: allPlayers || [] };

                    showOnlineReveal();
                } else {
                    showAlert('⚠️ فشل تحديث حالة الغرفة، حاول مرة أخرى', 'warning');
                }

            } catch (e) {
                console.error('hostStartGame error:', e);
                showAlert('❌ فشل بدء اللعبة: ' + e.message, 'error');
            } finally {
                ButtonManager.enable('btn-online-host-start');
            }
        }

        // ===== مغادرة الغرفة =====
        async function leaveOnlineRoom() {
            const sb = OS.supabase;
            if (!sb || !OS.roomId) {
                showScreen('online-lobby');
                resetButtons();
                renderPublicRooms();
                showToast('🚪 غادرت الغرفة', 'info');
                return;
            }

            const room = OS.gameData?.room;
            if (room && room.host_id === OS.clientId) {
                await transferHost(OS.roomId, OS.clientId);
            }

            showCustomModal('🚪 مغادرة الغرفة', 'هل أنت متأكد من مغادرة الغرفة؟', 'info', 'نعم، غادر', 'إلغاء', async () => {
                try {
                    if (OS.myPlayerId) {
                        await sb.from('room_players').delete().eq('id', OS.myPlayerId);
                    }
                } catch (e) {
                    console.error('Error deleting player:', e);
                }

                OS.subscriptions.forEach(sub => {
                    try { sub.unsubscribe(); } catch (e) { console.error('Error unsubscribing:', e); }
                });
                OS.subscriptions = [];
                TimerManager.clearAll();

                if (OS.refreshInterval) {
                    clearInterval(OS.refreshInterval);
                    OS.refreshInterval = null;
                }
                if (pollingInterval) {
                    clearInterval(pollingInterval);
                    pollingInterval = null;
                }
                if (OS._qaAskerTimer) {
                    clearInterval(OS._qaAskerTimer);
                    OS._qaAskerTimer = null;
                }
                if (OS._qaRespondentTimer) {
                    clearInterval(OS._qaRespondentTimer);
                    OS._qaRespondentTimer = null;
                }
                if (window._revealCheckInterval) {
                    clearInterval(window._revealCheckInterval);
                    window._revealCheckInterval = null;
                }
                OS.realtimeActive = true;

                OS.roomId = null;
                OS.roomCode = null;
                OS.isHost = false;
                OS.myPlayerId = null;
                OS.currentPhase = 'lobby';
                OS.gameData = null;
                OS._qaRealtimeSetup = false;
                OS.revealFlipped = false;
                OS.revealReadyClicked = false;
                OS.readyForNextRound = false;
                OS._hostControlsAttached = false;
                localStorage.removeItem('barra_room_id');

                showScreen('online-lobby');
                resetButtons();
                renderPublicRooms();
                showToast('🚪 غادرت الغرفة', 'info');
                hapticAndSound('click');
            });
        }

        async function transferHost(roomId, currentHostId) {
            const sb = OS.supabase;
            if (!sb) return;
            try {
                const { data: players, error: pErr } = await sb.from('room_players').select('id, client_id, player_name')
                    .eq('room_id', roomId).neq('client_id', currentHostId);
                if (pErr || !players || players.length === 0) {
                    await sb.from('rooms').delete().eq('id', roomId);
                    return;
                }
                const randomPlayer = players[randInt(0, players.length - 1)];
                await sb.from('rooms').update({
                    host_id: randomPlayer.client_id,
                    updated_at: new Date().toISOString()
                }).eq('id', roomId);

                showToast(`👑 أصبح ${randomPlayer.player_name} المضيف الجديد`, 'info');
                console.log('Host transferred to', randomPlayer.client_id);
            } catch (e) { console.error('Transfer host error:', e); }
        }

        // ===== اشتراكات Supabase =====
        function subscribeToRoom(roomId) {
            const sb = OS.supabase;
            if (!sb) return;
            OS.subscriptions.forEach(sub => { try { sub.unsubscribe(); } catch (e) {} });
            OS.subscriptions = [];
            const roomSub = sb.channel(`room-${roomId}`).on('postgres_changes', { event: '*', schema: 'public',
                    table: 'rooms', filter: `id=eq.${roomId}` }, (payload) => { handleRoomUpdate(payload); }).subscribe();
            OS.subscriptions.push(roomSub);
        }

        function subscribeToPlayers(roomId) {
            const sb = OS.supabase;
            if (!sb) return;

            OS.subscriptions.forEach(sub => {
                try { sub.unsubscribe(); } catch (e) { console.error('Error unsubscribing:', e); }
            });
            OS.subscriptions = [];

            const playerSub = sb.channel(`players-${roomId}`)
                .on('postgres_changes', {
                    event: '*',
                    schema: 'public',
                    table: 'room_players',
                    filter: `room_id=eq.${roomId}`
                }, (payload) => {
                    console.log('👥 Realtime update received:', payload);
                    OS.realtimeActive = true;
                    handlePlayerUpdate(payload);
                })
                .subscribe((status) => {
                    console.log('📡 Player subscription status:', status);
                    if (status === 'SUBSCRIBED') {
                        console.log('✅ Subscribed to players channel');
                        OS.realtimeActive = true;
                    } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
                        console.warn('⚠️ Realtime connection error - using polling fallback');
                        OS.realtimeActive = false;
                    }
                });
            OS.subscriptions.push(playerSub);

            if (OS.refreshInterval) {
                clearInterval(OS.refreshInterval);
                OS.refreshInterval = null;
            }

            OS.refreshInterval = setInterval(() => {
                if (OS.realtimeActive) {
                    return;
                }
                const isRoomScreen = document.getElementById('screen-online-room')?.classList.contains('active');
                const isLobbyScreen = document.getElementById('screen-online-lobby')?.classList.contains('active');
                if (OS.roomId && (isRoomScreen || isLobbyScreen)) {
                    console.log('🔄 Polling fallback: updating players');
                    renderOnlineRoom();
                }
            }, 5000);
        }

        // ===== معالجة تحديثات الغرفة =====
        let lastPhase = null;
        let lastQaData = null;
        let lastVoteData = null;
        let lastScData = null;
        let pollingInterval = null;

        function handleRoomUpdate(payload) {
    const newData = payload.new;
    if (!newData) return;

    const newTimestamp = new Date(newData.updated_at).getTime();
    if (OS.lastUpdateTimestamp && newTimestamp <= OS.lastUpdateTimestamp) {
        console.log('⏳ تحديث أقدم أو مكرر، تم تجاهله');
        return;
    }
    OS.lastUpdateTimestamp = newTimestamp;

    OS.gameData = { ...OS.gameData, room: newData };
    const phase = newData.status;
    if (phase !== OS.currentPhase) {
        console.log(`🔄 تغيير المرحلة: ${OS.currentPhase} → ${phase}`);
        OS.currentPhase = phase;
        // التأكد من تحديث الشاشة في جميع الأحوال
        switch (phase) {
            case 'lobby':
                renderOnlineRoom();
                showScreen('online-room');
                break;
            case 'reveal':
                showOnlineReveal();
                break;
            case 'qa':
                showOnlineQA();
                break;
            case 'voting':
                showOnlineVoting();
                break;
            case 'suspense':
                showOnlineSuspense();
                break;
            case 'secondchance':
                showOnlineSecondChance();
                break;
            case 'leaderboard':
                showOnlineLeaderboard();
                break;
            default:
                console.warn('⚠️ مرحلة غير معروفة:', phase);
        }
    }

    // إذا كنا في مرحلة التصويت، قم بتحديث الواجهة بشكل إضافي
    if (phase === 'voting' && document.getElementById('screen-online-voting')?.classList.contains('active')) {
        refreshVotingView(newData, OS.gameData?.players || []);
    }

    // تحديث بيانات الجولة في مرحلة الأسئلة
    if (phase === 'qa' && document.getElementById('screen-online-qa')?.classList.contains('active')) {
        handleQaUpdate(newData);
    }
}

        function handlePlayerUpdate(payload) {
    console.log('🔄 Player update detected:', payload);

    // ==========================================================
    // 🔥 المشكلة 5: معالجة مغادرة لاعب في منتصف التصويت
    // ==========================================================
    if (payload.eventType === 'DELETE') {
        const removed = payload.old;
        console.log('🚪 Player left:', removed?.player_name);
        
        if (removed && removed.id === OS.myPlayerId) {
            showToast('⚠️ تم إخراجك من الغرفة', 'warning');
            leaveOnlineRoom();
            return;
        }
        
        // إذا كان اللاعب قد صوت في الجولة الحالية
        if (removed && OS.currentPhase === 'voting' && OS.gameData?.room) {
            const round = OS.gameData.room.current_round || 0;
            OS.supabase.from('votes')
                .select('voter_id')
                .eq('room_id', OS.roomId)
                .eq('round_number', round)
                .then(async ({ data: votes }) => {
                    if (votes) {
                        const voters = votes.map(v => v.voter_id);
                        // تحديث قائمة اللاعبين
                        const { data: freshPlayers } = await OS.supabase
                            .from('room_players')
                            .select('*')
                            .eq('room_id', OS.roomId);
                        if (freshPlayers) {
                            // إذا أصبح عدد اللاعبين أقل من الحد الأدنى، نرجع للوبي
                            if (freshPlayers.length < CFG.MIN_PLAYERS) {
                                showToast('⚠️ عدد اللاعبين أقل من 3، العودة للوبي', 'warning');
                                await OS.supabase.from('rooms')
                                    .update({ status: 'lobby', updated_at: new Date().toISOString() })
                                    .eq('id', OS.roomId);
                                return;
                            }
                            
                            // تحديث واجهة التصويت
                            refreshVotingView(OS.gameData.room, freshPlayers);
                            
                            // تحديث عداد الجاهزية
                            updateReadyCountUI(OS.gameData.room, freshPlayers);
                            
                            // إذا كان اللاعب المغادر هو المضيف، نقل المضيفية
                            if (removed.client_id === OS.gameData.room.host_id) {
                                transferHost(OS.roomId, removed.client_id);
                            }
                        }
                    }
                });
        }
        
        if (removed && OS.gameData?.room) {
            const room = OS.gameData.room;
            if (room.host_id === removed.client_id) {
                transferHost(room.id, removed.client_id);
            }
        }
        return;
    }

    // معالجة باقي الأحداث
    if (OS.roomId && OS.supabase) {
        OS.supabase.from('room_players').select('*').eq('room_id', OS.roomId)
            .then(({ data, error }) => {
                if (!error && data) {
                    OS.gameData = { ...OS.gameData, players: data };
                    console.log('👥 Updated players:', data.length);

                    if (OS.currentPhase === 'lobby') {
                        renderOnlineRoom();
                        document.getElementById('online-room-player-count').textContent = `${data.length} لاعب`;
                        if (OS.isHost) {
                            hostUpdateUIControls(data, OS.gameData?.room);
                        }
                    }

                    if (OS.currentPhase === 'reveal') {
                        renderOnlineRoom();
                        updateRevealUI(OS.gameData?.room);
                        if (OS.isHost) {
                            hostCheckRevealComplete(data, OS.gameData?.room);
                        }
                    }

                    if (OS.currentPhase === 'qa') {
                        if (OS.isHost) {
                            hostCheckReadyForNextRound(OS.roomId);
                        }
                        if (document.getElementById('screen-online-qa')?.classList.contains('active')) {
                            refreshQAView(OS.gameData?.room);
                        }
                    }

                    if (OS.currentPhase === 'voting') {
                        const round = OS.gameData?.room?.current_round || 0;
                        OS.supabase.from('votes').select('voter_id').eq('room_id', OS.roomId).eq(
                            'round_number', round)
                            .then(({ data: votes }) => {
                                if (votes) {
                                    refreshVotingView(OS.gameData.room, data);
                                    updateReadyCountUI(OS.gameData.room, data);
                                }
                            });
                        if (OS.isHost) {
                            hostCheckVotingComplete(data, OS.gameData?.room);
                        }
                    }
                }
            });
    }

    if (payload.eventType === 'INSERT') {
        const added = payload.new;
        console.log('👋 Player joined:', added?.player_name);
        showToast(`👋 ${added?.player_name || 'لاعب'} انضم إلى الغرفة!`, 'success');
        playSound('click');
    }
}

        // ===== نظام الـ Polling الاحتياطي =====
        function startPolling(roomId) {
    if (pollingInterval) {
        clearInterval(pollingInterval);
        pollingInterval = null;
    }

    pollingInterval = setInterval(async () => {
        if (!OS.roomId || !OS.supabase) {
            clearInterval(pollingInterval);
            pollingInterval = null;
            return;
        }

        const activeScreens = ['online-room', 'online-reveal', 'online-qa', 'online-voting', 'online-suspense',
            'online-secondchance', 'online-leaderboard'
        ];
        const isGameScreen = activeScreens.some(id => document.getElementById(`screen-${id}`)?.classList
            .contains('active'));
        if (!isGameScreen) return;

        try {
            const { data: room, error } = await OS.supabase
                .from('rooms')
                .select('*, room_players(*)')
                .eq('id', OS.roomId)
                .single();

            if (error || !room) return;

            OS.gameData = { room, players: room.room_players || [] };

            // ==========================================================
            // 1. تغيير المرحلة
            // ==========================================================
            if (room.status !== lastPhase) {
                lastPhase = room.status;
                console.log('🔄 Polling detected phase change:', room.status);
                handlePhaseChange(room);
                return;
            }

            // ==========================================================
            // 2. مرحلة الأسئلة (QA)
            // ==========================================================
            if (room.status === 'qa') {
                const qaChanged = (
                    room.qa_question !== lastQaData?.question ||
                    room.qa_answer !== lastQaData?.answer ||
                    room.qa_answered !== lastQaData?.answered ||
                    room.qa_asker_id !== lastQaData?.askerId ||
                    room.qa_respondent_id !== lastQaData?.respondentId ||
                    room.qa_phase !== lastQaData?.phase ||
                    room.qa_question_submitted !== lastQaData?.questionSubmitted ||
                    room.qa_answer_submitted !== lastQaData?.answerSubmitted ||
                    room.qa_round_complete !== lastQaData?.roundComplete ||
                    room.qa_total_rounds !== lastQaData?.totalRounds
                );
                if (qaChanged) {
                    lastQaData = {
                        question: room.qa_question,
                        answer: room.qa_answer,
                        answered: room.qa_answered,
                        askerId: room.qa_asker_id,
                        respondentId: room.qa_respondent_id,
                        phase: room.qa_phase,
                        askerTimeLeft: room.qa_asker_time_left,
                        respondentTimeLeft: room.qa_respondent_time_left,
                        questionSubmitted: room.qa_question_submitted,
                        answerSubmitted: room.qa_answer_submitted,
                        roundComplete: room.qa_round_complete,
                        totalRounds: room.qa_total_rounds
                    };
                    console.log('🔄 QA data changed, refreshing...');
                    if (document.getElementById('screen-online-qa')?.classList.contains('active')) {
                        refreshQAView(room);
                    }
                }
            }

            // ==========================================================
            // 3. مرحلة التصويت (Voting) - 🔥 التعديل 1
            // ==========================================================
            if (room.status === 'voting') {
                const round = room.current_round || 0;
                const { data: votes } = await OS.supabase
                    .from('votes')
                    .select('voter_id, target_id')
                    .eq('room_id', OS.roomId)
                    .eq('round_number', round);

                const voteData = votes ? votes.map(v => `${v.voter_id}-${v.target_id}`).join(',') : '';
                if (voteData !== lastVoteData) {
                    lastVoteData = voteData;
                    console.log('🔄 Vote data changed, refreshing...');
                    if (document.getElementById('screen-online-voting')?.classList.contains('active')) {
                        refreshVotingView(room, room.room_players || []);
                        // تحديث عداد الجاهزية وعرض زر الجاهزية
                        showReadyForResultButton(room, room.room_players || []);
                        updateReadyCountUI(room, room.room_players || []);
                    }
                }
            }

            // ==========================================================
            // 4. مرحلة فرصة الإنقاذ (Second Chance)
            // ==========================================================
            if (room.status === 'secondchance') {
                if (room.sc_chosen !== lastScData?.chosen || room.sc_correct !== lastScData?.correct) {
                    lastScData = {
                        chosen: room.sc_chosen,
                        correct: room.sc_correct
                    };
                    console.log('🔄 Second chance data changed, refreshing...');
                    if (document.getElementById('screen-online-secondchance')?.classList.contains(
                        'active')) {
                        refreshSCView(room);
                    }
                }
            }

            // ==========================================================
            // 5. مرحلة الكشف (Reveal) - 🔥 التعديل 4
            // ==========================================================
            if (room.status === 'reveal') {
                if (document.getElementById('screen-online-reveal')?.classList.contains('active')) {
                    updateRevealUI(room);
                    // تحديث شريط التقدم وعداد الجاهزية
                    const players = room.room_players || [];
                    const revealedCount = players.filter(p => p.has_revealed === true).length;
                    const progressBar = document.getElementById('reveal-progress-bar');
                    if (progressBar) {
                        const percent = players.length > 0 ? Math.round((revealedCount / players.length) * 100) : 0;
                        progressBar.style.width = percent + '%';
                    }
                    const readyCountEl = document.getElementById('reveal-ready-count');
                    if (readyCountEl) {
                        readyCountEl.textContent = `${revealedCount} / ${players.length} جاهزون`;
                    }
                }
            }

            // ==========================================================
            // 6. مرحلة التشويق (Suspense) - 🔥 التعديل 2
            // ==========================================================
            if (room.status === 'suspense') {
                const isSuspenseScreen = document.getElementById('screen-online-suspense')?.classList.contains('active');
                if (isSuspenseScreen) {
                    const players = room.room_players || [];
                    const readyCount = players.filter(p => p.ready_for_result === true).length;
                    const counter = document.getElementById('suspense-ready-counter');
                    if (counter) {
                        counter.textContent = `جاهز ${readyCount} من ${players.length}`;
                    }
                    // إذا كان الجميع جاهزين والمضيف موجود، ننتقل تلقائياً
                    if (readyCount === players.length && players.length > 0 && OS.isHost) {
                        console.log('✅ Polling: جميع اللاعبين جاهزين في suspense، الهوست ينتقل...');
                        await OS.supabase.from('rooms').update({
                            status: 'secondchance',
                            updated_at: new Date().toISOString()
                        }).eq('id', OS.roomId);
                    }
                }
            }

            // ==========================================================
            // 7. مرحلة اللوبي (Lobby) - 🔥 التعديل 3
            // ==========================================================
            if (room.status === 'lobby') {
                const isLobbyScreen = document.getElementById('screen-online-room')?.classList.contains('active');
                if (isLobbyScreen) {
                    const players = room.room_players || [];
                    const list = document.getElementById('online-player-list');
                    if (list) {
                        list.innerHTML = players.map(p => {
                            const isMe = p.client_id === OS.clientId;
                            const idx = players.indexOf(p);
                            let cls = 'player-card ready';
                            if (p.client_id === room.host_id) cls += ' host';
                            if (isMe) cls += ' me';
                            const label = p.client_id === room.host_id ? `<i class="fa-solid fa-crown text-xs"></i>` : '';
                            const meLabel = isMe ? ' (أنت)' : '';
                            return `<div class="${cls}">
                                    ${avHTML(p.player_name, idx, 'sm')}
                                    <span class="text-sm font-bold text-slate-200 flex-1">${esc(p.player_name)}${meLabel}</span>
                                    ${label ? `<span class="text-xs">${label}</span>` : ''}
                                    <span class="status-dot ready"></span>
                                </div>`;
                        }).join('');
                    }
                    document.getElementById('online-room-player-count').textContent = `${players.length} لاعب`;
                }
            }

        } catch (e) {
            console.error('Polling error:', e);
        }
    }, 3000);
}

        function handlePhaseChange(room) {
            OS.currentPhase = room.status;
            OS.gameData = { room, players: room.room_players || [] };
            lastPhase = room.status;

            if (room.status === 'qa') {
                lastQaData = {
                    question: room.qa_question,
                    answer: room.qa_answer,
                    answered: room.qa_answered,
                    askerId: room.qa_asker_id,
                    respondentId: room.qa_respondent_id,
                    phase: room.qa_phase,
                    askerTimeLeft: room.qa_asker_time_left,
                    respondentTimeLeft: room.qa_respondent_time_left,
                    questionSubmitted: room.qa_question_submitted,
                    answerSubmitted: room.qa_answer_submitted,
                    roundComplete: room.qa_round_complete,
                    totalRounds: room.qa_total_rounds
                };
            }
            if (room.status === 'voting') {
                lastVoteData = null;
            }
            if (room.status === 'secondchance') {
                lastScData = {
                    chosen: room.sc_chosen,
                    correct: room.sc_correct
                };
            }

            switch (room.status) {
                case 'lobby':
                    renderOnlineRoom();
                    showScreen('online-room');
                    break;
                case 'reveal':
                    showOnlineReveal();
                    break;
                case 'qa':
                    showOnlineQA();
                    break;
                case 'voting':
                    showOnlineVoting();
                    break;
                case 'suspense':
                    showOnlineSuspense();
                    break;
                case 'secondchance':
                    showOnlineSecondChance();
                    break;
                case 'leaderboard':
                    showOnlineLeaderboard();
                    break;
            }
        }

        // ==============================================================
        // ===== مرحلة الكشف (Reveal) - التصميم الجديد 3D =====
        // ==============================================================

        async function showOnlineReveal() {
            showScreen('online-reveal');
            const sb = OS.supabase;
            if (!sb || !OS.roomId) return;

            const { data: room, error: roomErr } = await sb.from('rooms').select('*').eq('id', OS.roomId).single();
            if (roomErr || !room) {
                showToast('⚠️ خطأ في تحميل بيانات الغرفة', 'error');
                return;
            }

            const { data: players, error: pErr } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
            if (pErr || !players) {
                showToast('⚠️ خطأ في تحميل بيانات اللاعبين', 'error');
                return;
            }

            OS.gameData = { room, players };
            const myPlayer = players.find(p => p.client_id === OS.clientId);
            if (!myPlayer) {
                showToast('⚠️ لم يتم العثور على بياناتك', 'error');
                return;
            }

            updateRevealUI(room);
        }

        function updateRevealUI(room) {
            if (!room) return;
            const players = OS.gameData?.players || [];
            const myPlayer = players.find(p => p.client_id === OS.clientId);
            if (!myPlayer) return;

            const category = room.category || 'غير محدد';
            const secretWord = room.secret_word || '???';
            const oddWord = room.odd_word || null;
            const isOdd = myPlayer.is_odd || false;
            const mode = room.mode || 'traditional';

            const totalPlayers = players.length;
            const revealedCount = players.filter(p => p.has_revealed === true).length;
            const readyPercent = totalPlayers > 0 ? Math.round((revealedCount / totalPlayers) * 100) : 0;

            const categoryNameEl = document.getElementById('reveal-category-name');
            if (categoryNameEl) categoryNameEl.textContent = category;

            const readyCountEl = document.getElementById('reveal-ready-count');
            if (readyCountEl) {
                readyCountEl.textContent = `${revealedCount} / ${totalPlayers} جاهزون`;
            }

            const progressBar = document.getElementById('reveal-progress-bar');
            if (progressBar) {
                progressBar.style.width = readyPercent + '%';
            }

            const backFace = document.getElementById('reveal-back-face');
            if (backFace) {
                if (isOdd && mode === 'traditional') {
                    backFace.className = 'flip-card-back role-out';
                    backFace.innerHTML = `
                        <div class="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-xl mb-2">
                            <i class="fa-solid fa-user-ninja"></i>
                        </div>
                        <span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20 mb-1">
                            دورك الحالي
                        </span>
                        <h2 class="text-2xl font-black text-white">أنت برا السالفة</h2>
                        <p class="text-xs text-slate-300 text-center mt-2 leading-relaxed max-w-[220px]">
                            استغل الفئة "${esc(category)}" وركّز في أسئلة وإجابات البقية لتخمين الموضوع دون كشفك.
                        </p>
                    `;
                } else if (isOdd && mode === 'mindbending') {
                    backFace.className = 'flip-card-back role-in';
                    backFace.innerHTML = `
                        <div class="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-xl mb-2">
                            <i class="fa-solid fa-brain"></i>
                        </div>
                        <span class="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20 mb-1">
                            كلمتك المختلفة
                        </span>
                        <h2 class="text-3xl font-black text-white tracking-wide">${esc(oddWord || '???')}</h2>
                        <p class="text-xs text-slate-300 text-center mt-2 leading-relaxed max-w-[220px]">
                            اللاعبون الآخرون لديهم كلمة مختلفة من فئة "${esc(category)}"
                        </p>
                    `;
                } else {
                    backFace.className = 'flip-card-back role-in';
                    backFace.innerHTML = `
                        <div class="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-xl mb-2">
                            <i class="fa-solid fa-key"></i>
                        </div>
                        <span class="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20 mb-1">
                            السالفة هي
                        </span>
                        <h2 class="text-3xl font-black text-white tracking-wide">${esc(secretWord)}</h2>
                        <p class="text-xs text-slate-300 text-center mt-2 leading-relaxed max-w-[220px]">
                            جميع اللاعبين يعرفون الكلمة ما عدا شخص واحد برا السالفة.
                        </p>
                    `;
                }
            }

            const readyBtn = document.getElementById('btn-reveal-ready');
            if (readyBtn) {
                if (myPlayer.has_revealed) {
                    readyBtn.className =
                        'btn-ready-reveal w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-default';
                    readyBtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>في انتظار بقية اللاعبين...</span>`;
                    readyBtn.disabled = true;
                } else {
                    readyBtn.className =
                        'btn-ready-reveal w-full py-3.5 rounded-2xl font-bold text-sm bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all flex items-center justify-center gap-2';
                    readyBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>جاهز وبدء الجولة</span>`;
                    readyBtn.disabled = false;

                    const newBtn = readyBtn.cloneNode(true);
                    readyBtn.parentNode.replaceChild(newBtn, readyBtn);

                    newBtn.addEventListener('click', async () => {
                        if (ButtonManager.isDisabled('btn-reveal-ready')) return;
                        ButtonManager.disable('btn-reveal-ready', 'جاري التجهيز...');

                        try {
                            const sb = OS.supabase;
                            if (!sb) return;

                            await sb.from('room_players').update({ has_revealed: true }).eq('id', OS
                            .myPlayerId);
                            hapticSuccessWithSound();
                            playSound('reveal');

                            newBtn.className =
                                'btn-ready-reveal w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-default';
                            newBtn.innerHTML =
                                `<i class="fa-solid fa-check-circle"></i> <span>في انتظار بقية اللاعبين...</span>`;
                            newBtn.disabled = true;

                            const { data: updatedPlayers } = await sb.from('room_players').select('*').eq(
                                'room_id', OS.roomId);
                            if (updatedPlayers) {
                                OS.gameData = { ...OS.gameData, players: updatedPlayers };
                                const newRevealed = updatedPlayers.filter(p => p.has_revealed === true)
                                    .length;
                                const newPercent = updatedPlayers.length > 0 ? Math.round((newRevealed /
                                    updatedPlayers.length) * 100) : 0;
                                const progressBar = document.getElementById('reveal-progress-bar');
                                if (progressBar) progressBar.style.width = newPercent + '%';
                                const readyCountEl = document.getElementById('reveal-ready-count');
                                if (readyCountEl) {
                                    readyCountEl.textContent =
                                        `${newRevealed} / ${updatedPlayers.length} جاهزون`;
                                }
                            }

                            showToast('✅ تم تجهيزك! في انتظار الآخرين...', 'success');
                            ButtonManager.enable('btn-reveal-ready');

                            if (OS.isHost) {
                                const { data: allPlayers } = await sb.from('room_players').select('*').eq(
                                    'room_id', OS.roomId);
                                if (allPlayers) {
                                    hostCheckRevealComplete(allPlayers, OS.gameData?.room);
                                }
                            }

                        } catch (e) {
                            console.error('Ready button error:', e);
                            showToast('❌ حدث خطأ، حاول مرة أخرى', 'error');
                            ButtonManager.enable('btn-reveal-ready');
                            newBtn.className =
                                'btn-ready-reveal w-full py-3.5 rounded-2xl font-bold text-sm bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all flex items-center justify-center gap-2';
                            newBtn.innerHTML =
                            `<i class="fa-solid fa-circle-check"></i> <span>جاهز وبدء الجولة</span>`;
                            newBtn.disabled = false;
                        }
                    });
                }
            }

            const flipCard = document.getElementById('reveal-flip-card');
            if (flipCard) {
                if (myPlayer.has_revealed) {
                    flipCard.classList.add('is-flipped');
                } else {
                    const newFlipCard = flipCard.cloneNode(true);
                    flipCard.parentNode.replaceChild(newFlipCard, flipCard);

                    newFlipCard.addEventListener('click', () => {
                        if (!newFlipCard.classList.contains('is-flipped')) {
                            newFlipCard.classList.add('is-flipped');
                            hapticAndSound('click');
                            OS.revealFlipped = true;
                        }
                    });
                }
            }
        }

        async function hostCheckRevealComplete(players, room) {
            if (!OS.isHost || !room || OS.stageLock) return;
            if (room.status !== 'reveal') return;

            const allRevealed = players.every(p => p.has_revealed === true);

            if (!allRevealed) {
                const revealed = players.filter(p => p.has_revealed).length;
                const progressBar = document.getElementById('reveal-progress-bar');
                if (progressBar) {
                    const percent = players.length > 0 ? Math.round((revealed / players.length) * 100) : 0;
                    progressBar.style.width = percent + '%';
                }
                const readyCountEl = document.getElementById('reveal-ready-count');
                if (readyCountEl) {
                    readyCountEl.textContent = `${revealed} / ${players.length} جاهزون`;
                }
                return;
            }

            console.log('🎯 جميع اللاعبين اطلعوا على دورهم، الهوست ينتقل للأسئلة...');
            OS.stageLock = true;

            if (window._revealCheckInterval) {
                clearInterval(window._revealCheckInterval);
                window._revealCheckInterval = null;
            }

            try {
                const sb = OS.supabase;
                if (!sb) return;

// في بداية جولة جديدة (عند الانتقال من reveal إلى qa)
await sb.from('room_players')
    .update({ ready_for_result: false })
    .eq('room_id', room.id);

                await sb.from('rooms').update({
                    status: 'qa',
                    qa_phase: 'waiting',
                    qa_round: 0,
                    qa_total_rounds: room.total_rounds || players.length,
                    qa_start_time: new Date().toISOString(),
                    qa_question_submitted: false,
                    qa_answer_submitted: false,
                    qa_round_complete: false,
                    qa_asker_id: null,
                    qa_respondent_id: null,
                    qa_question: null,
                    qa_answer: null,
                    qa_answered: false,
                    updated_at: new Date().toISOString()
                }).eq('id', room.id);

                let retries = 0;
                let confirmed = false;
                while (retries < 10 && !confirmed) {
                    await new Promise(resolve => setTimeout(resolve, 300));
                    const { data: check } = await sb.from('rooms').select('status').eq('id', room.id).single();
                    if (check && check.status === 'qa') {
                        confirmed = true;
                        break;
                    }
                    retries++;
                }

                if (confirmed) {
                    showToast('🎤 الجميع جاهز! مرحلة الأسئلة تبدأ', 'success');
                    playSound('game_start');
                    OS.currentPhase = 'qa';
                    lastPhase = 'qa';

                    await startNewQARound(room.id);
                    showOnlineQA();
                } else {
                    showAlert('⚠️ فشل الانتقال لمرحلة الأسئلة', 'warning');
                }
            } catch (e) {
                console.error('hostCheckRevealComplete error:', e);
                showAlert('❌ فشل الانتقال للمرحلة التالية: ' + e.message, 'error');
            } finally {
                OS.stageLock = false;
            }
        }

        // ==============================================================
        // ===== نظام الأسئلة المطور (بدون مؤقتات) =====
        // ==============================================================

        function setupQaRealtime(roomId) {
            const sb = OS.supabase;
            if (!sb || !roomId) return;

            if (OS._qaRealtimeSetup) {
                console.log('📡 نظام المتابعة الفورية للأسئلة مفعل بالفعل');
                return;
            }

            console.log('📡 إعداد نظام المتابعة الفورية للأسئلة...');

            OS.subscriptions.forEach(sub => {
                try {
                    if (sub.topic && sub.topic.includes('qa')) {
                        sub.unsubscribe();
                    }
                } catch (e) {}
            });

            const roomChannel = sb.channel(`qa-room-${roomId}`)
                .on('postgres_changes', {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'rooms',
                    filter: `id=eq.${roomId}`
                }, (payload) => {
                    const newData = payload.new;
                    console.log('🔄 تحديث فوري للغرفة (QA):', newData.qa_phase, newData.qa_round);
                    handleQaUpdate(newData);
                })
                .subscribe();

            OS.subscriptions.push(roomChannel);

            const playersChannel = sb.channel(`qa-players-${roomId}`)
                .on('postgres_changes', {
                    event: '*',
                    schema: 'public',
                    table: 'room_players',
                    filter: `room_id=eq.${roomId}`
                }, (payload) => {
                    console.log('👥 تحديث فوري للاعبين (QA)');
                    refreshPlayersList(roomId);
                })
                .subscribe();

            OS.subscriptions.push(playersChannel);

            OS._qaRealtimeSetup = true;
            console.log('✅ تم تفعيل نظام المتابعة الفورية للأسئلة');
        }

        function handleQaUpdate(roomData) {
    if (!roomData) return;

    const phase = roomData.qa_phase;
    const round = roomData.qa_round || 0;
    const totalRounds = roomData.qa_total_rounds || OS.gameData?.players?.length || QA_CONFIG.TOTAL_ROUNDS;
    const questionSubmitted = roomData.qa_question_submitted || false;
    const answerSubmitted = roomData.qa_answer_submitted || false;
    const roundComplete = roomData.qa_round_complete || false;

    // تحديث شارة الجولة
    const roundDisplay = document.getElementById('online-qa-round-display');
    if (roundDisplay) {
        const displayRound = Math.min(round + 1, totalRounds);
        roundDisplay.textContent = `الجولة ${displayRound} من ${totalRounds}`;
    }

    // تحديث أسماء السائل والمجيب
    const askerName = getPlayerName(roomData.qa_asker_id);
    const respondentName = getPlayerName(roomData.qa_respondent_id);

    const askerNameEl = document.getElementById('qa-asker-name');
    if (askerNameEl) askerNameEl.textContent = askerName || '—';

    const respondentNameEl = document.getElementById('qa-respondent-name');
    if (respondentNameEl) respondentNameEl.textContent = respondentName || '—';

    if (askerName) {
        const avatar = document.getElementById('qa-asker-avatar');
        if (avatar) avatar.textContent = askerName.charAt(0).toUpperCase();
    }
    if (respondentName) {
        const avatar = document.getElementById('qa-respondent-avatar');
        if (avatar) avatar.textContent = respondentName.charAt(0).toUpperCase();
    }

    const askerLabel = document.getElementById('qa-respondent-asker-label');
    if (askerLabel && askerName) {
        askerLabel.textContent = `${askerName} يسألك:`;
    }

    const specAskerLabel = document.getElementById('qa-spectator-asker-label');
    if (specAskerLabel && askerName && respondentName) {
        specAskerLabel.textContent = `${askerName} يسأل ${respondentName}:`;
    }
    const specRespondentLabel = document.getElementById('qa-spectator-respondent-label');
    if (specRespondentLabel && respondentName) {
        specRespondentLabel.textContent = `${respondentName} يجيب:`;
    }

    // ==========================================================
    // 🔥 المشكلة 8: تحديث حقل الإجابة للمجيب
    // ==========================================================
    const myPlayer = OS.gameData?.players?.find(p => p.client_id === OS.clientId);
    
    // تحديث نص السؤال
    if (roomData.qa_question) {
        const qText = document.getElementById('qa-spectator-q-text');
        if (qText) qText.textContent = `"${esc(roomData.qa_question)}"`;

        const receivedQ = document.getElementById('online-qa-received-q');
        if (receivedQ) receivedQ.textContent = `"${esc(roomData.qa_question)}"`;

        const askerQInput = document.getElementById('online-qa-question-input');
        if (askerQInput && !askerQInput.value) {
            askerQInput.value = roomData.qa_question;
        }
        
        // 🔥 إذا كان اللاعب هو المجيب، فعّل حقل الإجابة
        if (myPlayer && myPlayer.id === roomData.qa_respondent_id) {
            const answerInput = document.getElementById('online-qa-answer-input');
            const sendABtn = document.getElementById('btn-online-qa-send-a');
            
            if (!answerSubmitted && !roundComplete) {
                if (answerInput) {
                    answerInput.disabled = false;
                    answerInput.focus();
                }
                if (sendABtn) {
                    sendABtn.disabled = false;
                    sendABtn.innerHTML = `<i class="fa-solid fa-reply"></i> <span>إرسال الإجابة</span>`;
                }
            } else {
                if (answerInput) answerInput.disabled = true;
                if (sendABtn) {
                    sendABtn.disabled = true;
                    if (answerSubmitted) {
                        sendABtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>تم الإرسال ✓</span>`;
                    }
                }
            }
        }
    }

    // تحديث نص الإجابة (يظهر فقط للسائل)
    if (roomData.qa_answer && roomData.qa_answered) {
        const isAsker = myPlayer && myPlayer.id === roomData.qa_asker_id;

        const aText = document.getElementById('qa-spectator-a-text');
        if (aText) {
            aText.textContent = `"${esc(roomData.qa_answer)}"`;
            aText.className = 'text-xs font-semibold text-slate-200';
        }

        // إظهار الإجابة فقط للسائل
        const responseBox = document.getElementById('qa-asker-response-box');
        const responseText = document.getElementById('qa-asker-response-text');
        if (responseBox && responseText) {
            if (isAsker) {
                responseBox.classList.remove('hidden');
                responseText.textContent = `"${esc(roomData.qa_answer)}"`;
            } else {
                responseBox.classList.add('hidden');
            }
        }
    }

    // تحديث حالة الأزرار بناءً على مرحلة الجولة
    updateUIByPhase(roomData);

    // تحديث دور اللاعب الحالي
    updateMyRole(roomData);

    // تحديث سجل الأسئلة
    if (roomData.qa_answered || roomData.qa_round_complete) {
        loadAndDisplayHistory(OS.roomId);
    }

    // إظهار زر "جاهز للجولة التالية" إذا اكتملت الجولة
    if (roundComplete) {
        showNextRoundReadyButton(roomData);
    } else {
        hideNextRoundReadyButton();
    }
}

        function updateUIByPhase(roomData) {
            const phase = roomData.qa_phase;
            const questionSubmitted = roomData.qa_question_submitted || false;
            const answerSubmitted = roomData.qa_answer_submitted || false;
            const roundComplete = roomData.qa_round_complete || false;

            const myPlayer = OS.gameData?.players?.find(p => p.client_id === OS.clientId);
            if (!myPlayer) return;

            const isAsker = myPlayer.id === roomData.qa_asker_id;
            const isRespondent = myPlayer.id === roomData.qa_respondent_id;

            const askerView = document.getElementById('view-asker');
            const respondentView = document.getElementById('view-respondent');
            const spectatorView = document.getElementById('view-spectator');

            if (askerView) askerView.classList.remove('hidden');
            if (respondentView) respondentView.classList.add('hidden');
            if (spectatorView) spectatorView.classList.add('hidden');

            hideNextRoundReadyButton();

            if (roundComplete) {
                showNextRoundReadyButton(roomData);
                return;
            }

            if (isAsker) {
                if (askerView) askerView.classList.remove('hidden');
                if (respondentView) respondentView.classList.add('hidden');
                if (spectatorView) spectatorView.classList.add('hidden');

                const qInput = document.getElementById('online-qa-question-input');
                const sendQBtn = document.getElementById('btn-online-qa-send-q');

                if (questionSubmitted) {
                    if (qInput) qInput.disabled = true;
                    if (sendQBtn) {
                        sendQBtn.disabled = true;
                        sendQBtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>تم الإرسال ✓</span>`;
                    }
                } else {
                    if (qInput) qInput.disabled = false;
                    if (sendQBtn) {
                        sendQBtn.disabled = false;
                        sendQBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>إرسال السؤال</span>`;
                    }
                    // إذا كانت الإجابة واردة، ستظهر عبر الشرط أعلاه
                }

                const targetLabel = document.getElementById('qa-asker-target-label');
                const respondentName = getPlayerName(roomData.qa_respondent_id);
                if (targetLabel && respondentName) {
                    targetLabel.textContent = respondentName;
                }

            } else if (isRespondent) {
                if (respondentView) respondentView.classList.remove('hidden');
                if (askerView) askerView.classList.add('hidden');
                if (spectatorView) spectatorView.classList.add('hidden');

                const aInput = document.getElementById('online-qa-answer-input');
                const sendABtn = document.getElementById('btn-online-qa-send-a');

                if (questionSubmitted && !answerSubmitted) {
                    if (aInput) aInput.disabled = false;
                    if (sendABtn) {
                        sendABtn.disabled = false;
                        sendABtn.innerHTML = `<i class="fa-solid fa-reply"></i> <span>إرسال الإجابة</span>`;
                    }
                    const receivedQ = document.getElementById('online-qa-received-q');
                    if (receivedQ && roomData.qa_question) {
                        receivedQ.textContent = `"${esc(roomData.qa_question)}"`;
                    }
                } else if (answerSubmitted || roundComplete) {
                    if (aInput) aInput.disabled = true;
                    if (sendABtn) {
                        sendABtn.disabled = true;
                        if (answerSubmitted) {
                            sendABtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>تم الإرسال ✓</span>`;
                        }
                    }
                } else {
                    if (aInput) aInput.disabled = true;
                    if (sendABtn) sendABtn.disabled = true;
                }

            } else {
                if (spectatorView) spectatorView.classList.remove('hidden');
                if (askerView) askerView.classList.add('hidden');
                if (respondentView) respondentView.classList.add('hidden');

                if (roomData.qa_question) {
                    const qText = document.getElementById('qa-spectator-q-text');
                    if (qText) qText.textContent = `"${esc(roomData.qa_question)}"`;
                }
                if (roomData.qa_answer && roomData.qa_answered) {
                    const aText = document.getElementById('qa-spectator-a-text');
                    if (aText) {
                        aText.textContent = `"${esc(roomData.qa_answer)}"`;
                        aText.className = 'text-xs font-semibold text-slate-200';
                    }
                }
            }

            updateRoleBadge(roomData);
        }

        function updateRoleBadge(roomData) {
            const myPlayer = OS.gameData?.players?.find(p => p.client_id === OS.clientId);
            if (!myPlayer) return;

            const isAsker = myPlayer.id === roomData.qa_asker_id;
            const isRespondent = myPlayer.id === roomData.qa_respondent_id;
            const roundComplete = roomData.qa_round_complete || false;

            const roleBadge = document.getElementById('player-role-badge');
            const roleIcon = document.getElementById('player-role-icon');
            const roleText = document.getElementById('player-role-text');

            if (roundComplete) {
                roleBadge.className =
                    "px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-extrabold text-xs flex items-center gap-1.5 shadow-sm";
                roleIcon.className = "fa-solid fa-check-circle text-[11px]";
                roleText.textContent = "اكتملت الجولة";
                return;
            }

            if (isAsker) {
                roleBadge.className =
                    "px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-extrabold text-xs flex items-center gap-1.5 shadow-sm";
                roleIcon.className = "fa-solid fa-microphone text-[11px]";
                roleText.textContent = "سائل";
            } else if (isRespondent) {
                roleBadge.className =
                    "px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-extrabold text-xs flex items-center gap-1.5 shadow-sm";
                roleIcon.className = "fa-solid fa-comment-dots text-[11px]";
                roleText.textContent = "مجيب";
            } else {
                roleBadge.className =
                    "px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-extrabold text-xs flex items-center gap-1.5 shadow-sm";
                roleIcon.className = "fa-solid fa-eye text-[11px]";
                roleText.textContent = "متفرج";
            }
        }

        // ===== إظهار/إخفاء زر الجاهزية للجولة التالية =====
        function showNextRoundReadyButton(roomData) {
            const container = document.getElementById('qa-next-ready-container');
            if (!container) return;

            const myPlayer = OS.gameData?.players?.find(p => p.client_id === OS.clientId);
            if (!myPlayer) return;

            container.classList.remove('hidden');

            const btn = document.getElementById('btn-qa-ready-next');
            const status = document.getElementById('qa-next-ready-status');

            if (myPlayer.ready_for_next_round) {
                btn.className =
                    'btn-next-ready w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-default';
                btn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>جاهز ✓</span>`;
                btn.disabled = true;
                btn.classList.add('ready-done');
            } else {
                btn.className =
                    'btn-next-ready w-full py-3.5 rounded-2xl font-bold text-sm bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all flex items-center justify-center gap-2';
                btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>جاهز للجولة التالية</span>`;
                btn.disabled = false;
                btn.classList.remove('ready-done');

                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);

                newBtn.addEventListener('click', async () => {
                    if (ButtonManager.isDisabled('btn-qa-ready-next')) return;
                    ButtonManager.disable('btn-qa-ready-next', 'جاري التجهيز...');

                    try {
                        const sb = OS.supabase;
                        if (!sb) return;

                        await sb.from('room_players').update({ ready_for_next_round: true }).eq('id', OS
                            .myPlayerId);
                        hapticSuccessWithSound();

                        OS.readyForNextRound = true;
                        newBtn.className =
                            'btn-next-ready w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-default';
                        newBtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>جاهز ✓</span>`;
                        newBtn.disabled = true;
                        newBtn.classList.add('ready-done');

                        showToast('✅ تم تسجيل جاهزيتك، في انتظار الآخرين...', 'success');
                        ButtonManager.enable('btn-qa-ready-next');

                        if (OS.isHost) {
                            hostCheckReadyForNextRound(OS.roomId);
                        }

                    } catch (e) {
                        console.error('Ready for next round error:', e);
                        showToast('❌ حدث خطأ، حاول مرة أخرى', 'error');
                        ButtonManager.enable('btn-qa-ready-next');
                        newBtn.className =
                            'btn-next-ready w-full py-3.5 rounded-2xl font-bold text-sm bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all flex items-center justify-center gap-2';
                        newBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>جاهز للجولة التالية</span>`;
                        newBtn.disabled = false;
                        newBtn.classList.remove('ready-done');
                    }
                });
            }

            const allPlayers = OS.gameData?.players || [];
            const readyCount = allPlayers.filter(p => p.ready_for_next_round === true).length;
            status.textContent = `جاهز ${readyCount} من ${allPlayers.length} لاعبين`;
        }

        function hideNextRoundReadyButton() {
            const container = document.getElementById('qa-next-ready-container');
            if (container) container.classList.add('hidden');
        }

        // ===== المضيف يتحقق من جاهزية الجميع للجولة التالية =====
        async function hostCheckReadyForNextRound(roomId) {
            const sb = OS.supabase;
            if (!sb || !OS.isHost || OS.stageLock) return;
            if (!OS.roomId) return;

            const { data: players, error } = await sb.from('room_players')
                .select('id, ready_for_next_round')
                .eq('room_id', roomId);
            if (error || !players) return;

            const allReady = players.every(p => p.ready_for_next_round === true);
            if (!allReady) {
                const container = document.getElementById('qa-next-ready-container');
                if (container) {
                    const status = document.getElementById('qa-next-ready-status');
                    const readyCount = players.filter(p => p.ready_for_next_round === true).length;
                    status.textContent = `جاهز ${readyCount} من ${players.length} لاعبين`;
                }
                return;
            }

            console.log('🎯 جميع اللاعبين جاهزون للجولة التالية، الهوست ينتقل...');
            OS.stageLock = true;

            try {
                await sb.from('room_players')
                    .update({ ready_for_next_round: false })
                    .eq('room_id', roomId);

                await startNewQARound(roomId);

                showToast('✅ الجميع جاهز! الجولة التالية تبدأ', 'success');

            } catch (e) {
                console.error('hostCheckReadyForNextRound error:', e);
                showAlert('❌ فشل الانتقال للجولة التالية: ' + e.message, 'error');
            } finally {
                OS.stageLock = false;
            }
        }

        function getPlayerName(playerId) {
            if (!playerId) return null;
            const players = OS.gameData?.players || [];
            const player = players.find(p => p.id === playerId);
            return player?.player_name || null;
        }

        function updateMyRole(roomData) {
            const myPlayer = OS.gameData?.players?.find(p => p.client_id === OS.clientId);
            if (!myPlayer || !roomData) return;

            OS.qaRole = null;
            if (myPlayer.id === roomData.qa_asker_id) OS.qaRole = 'asker';
            else if (myPlayer.id === roomData.qa_respondent_id) OS.qaRole = 'respondent';
            else OS.qaRole = 'spectator';

            updateUIByPhase(roomData);
        }

        async function refreshPlayersList(roomId) {
            const sb = OS.supabase;
            if (!sb || !roomId) return;

            try {
                const { data: players, error } = await sb.from('room_players')
                    .select('*')
                    .eq('room_id', roomId);
                if (!error && players) {
                    OS.gameData = { ...OS.gameData, players };
                }
            } catch (e) {
                console.error('❌ فشل تحديث قائمة اللاعبين:', e);
            }
        }

        // ===== بدء جولة أسئلة جديدة =====
        async function startNewQARound(roomId) {
            const sb = OS.supabase;
            if (!sb || !roomId) return;

            if (OS.isAdvancing) {
                console.log('⏳ جاري بدء جولة جديدة بالفعل...');
                return;
            }
            OS.isAdvancing = true;

            try {
                console.log('🔄 بدء جولة أسئلة جديدة...');

                const { data: room, error: roomErr } = await sb.from('rooms').select('*').eq('id', roomId).single();
                if (roomErr || !room) {
                    console.error('❌ فشل جلب بيانات الغرفة:', roomErr);
                    OS.isAdvancing = false;
                    return;
                }

                const { data: players, error: pErr } = await sb.from('room_players').select('*').eq('room_id', roomId);
                if (pErr || !players || players.length < QA_CONFIG.MIN_PLAYERS) {
                    console.error('❌ عدد اللاعبين غير كافٍ');
                    OS.isAdvancing = false;
                    return;
                }

                const currentRound = room.qa_round || 0;
                const totalRounds = room.qa_total_rounds || players.length;

                // التحقق من انتهاء جميع الجولات
                if (currentRound >= totalRounds) {
                    console.log('✅ انتهت جميع الجولات، الانتقال للتصويت');
                    await sb.from('rooms').update({
                        status: 'voting',
                        qa_phase: 'done',
                        qa_round_complete: true,
                        updated_at: new Date().toISOString()
                    }).eq('id', roomId);

                    showToast('🗳️ انتهت الأسئلة! الانتقال للتصويت', 'success');
                    OS.isAdvancing = false;
                    showOnlineVoting();
                    return;
                }

                // تحديد السائل والمجيب بالتناوب
                const n = players.length;
                const askerIdx = currentRound % n;
                const respondentIdx = (askerIdx + 1) % n;
                const asker = players[askerIdx];
                const respondent = players[respondentIdx];

                console.log(`🎯 الجولة ${currentRound + 1}: ${asker.player_name} → ${respondent.player_name}`);

                // Reset all QA fields for the new round, but keep qa_round as the NEXT round index
                const nextRound = currentRound + 1;

                const updateData = {
                    qa_round: nextRound,
                    qa_asker_id: asker.id,
                    qa_respondent_id: respondent.id,
                    qa_question: null,
                    qa_answer: null,
                    qa_answered: false,
                    qa_phase: 'asking',
                    qa_question_submitted: false,
                    qa_answer_submitted: false,
                    qa_round_complete: false,
                    qa_start_time: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                };

                console.log('📝 تحديث الغرفة للجولة الجديدة:', updateData);

                const updateResult = await sb.from('rooms').update(updateData).eq('id', roomId);
                if (updateResult.error) {
                    console.error('❌ فشل تحديث الغرفة:', updateResult.error);
                    OS.isAdvancing = false;
                    return;
                }

                // إعادة تعيين جاهزية الجميع للجولة التالية
                await sb.from('room_players')
                    .update({ ready_for_next_round: false })
                    .eq('room_id', roomId);

                showToast(`🎤 الجولة ${currentRound + 1}: ${asker.player_name} يسأل ${respondent.player_name}`, 'info');
                hapticAndSound('click');

                const updatedRoom = { ...room, ...updateData };

                const { data: updatedPlayers } = await sb.from('room_players').select('*').eq('room_id', roomId);
                OS.gameData = { room: updatedRoom, players: updatedPlayers || [] };

                handleQaUpdate(updatedRoom);
                updateMyRole(updatedRoom);
                await loadAndDisplayHistory(roomId);

                const myPlayer = updatedPlayers?.find(p => p.client_id === OS.clientId);
                if (myPlayer && myPlayer.id === asker.id) {
                    const questionInput = document.getElementById('online-qa-question-input');
                    const sendBtn = document.getElementById('btn-online-qa-send-q');
                    if (questionInput && sendBtn) {
                        questionInput.disabled = false;
                        questionInput.value = '';
                        sendBtn.disabled = false;
                        sendBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>إرسال السؤال</span>`;
                        questionInput.focus();
                    }
                }

                // Reset respondent view
                const respondentView = document.getElementById('view-respondent');
                if (respondentView) {
                    const aInput = document.getElementById('online-qa-answer-input');
                    const sendABtn = document.getElementById('btn-online-qa-send-a');
                    const receivedQ = document.getElementById('online-qa-received-q');
                    if (aInput) { aInput.disabled = true;
                        aInput.value = ''; }
                    if (sendABtn) { sendABtn.disabled = true;
                        sendABtn.innerHTML = `<i class="fa-solid fa-reply"></i> <span>إرسال الإجابة</span>`; }
                    if (receivedQ) receivedQ.textContent = '⏳ في انتظار السؤال...';
                }

                // Reset spectator view
                const spectatorQText = document.getElementById('qa-spectator-q-text');
                const spectatorAText = document.getElementById('qa-spectator-a-text');
                if (spectatorQText) spectatorQText.textContent = '⏳ في انتظار السؤال...';
                if (spectatorAText) { spectatorAText.textContent = '...في انتظار الرد';
                    spectatorAText.className = 'text-xs font-semibold text-slate-200 italic'; }

                // Reset asker response box
                const responseBox = document.getElementById('qa-asker-response-box');
                if (responseBox) responseBox.classList.add('hidden');

                hideNextRoundReadyButton();

                OS.isAdvancing = false;

            } catch (e) {
                console.error('❌ فشل بدء جولة جديدة:', e);
                showToast('❌ فشل بدء الجولة: ' + e.message, 'error');
                OS.isAdvancing = false;
            }
        }

        // ===== إرسال السؤال =====
        async function sendQuestion() {
            const sb = OS.supabase;
            if (!sb || !OS.roomId) {
                showToast('❌ لا يوجد اتصال بقاعدة البيانات', 'error');
                return;
            }

            const questionInput = document.getElementById('online-qa-question-input');
            if (!questionInput) {
                showToast('❌ خطأ في واجهة المستخدم', 'error');
                return;
            }

            const question = questionInput.value.trim();
            if (!question) {
                showToast('✏️ اكتب سؤالاً أولاً!', 'warning');
                questionInput.focus();
                return;
            }

            const btn = document.getElementById('btn-online-qa-send-q');
            if (btn.disabled) return;

            btn.disabled = true;
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>جاري الإرسال...</span>`;

            questionInput.disabled = true;

            try {
                console.log('📤 محاولة إرسال السؤال:', question);

                const { data: room, error: roomErr } = await sb.from('rooms')
                    .select('qa_asker_id, qa_question_submitted, qa_phase, status, qa_round')
                    .eq('id', OS.roomId)
                    .single();

                if (roomErr || !room) {
                    showToast('❌ خطأ في جلب بيانات الغرفة', 'error');
                    console.error('❌ خطأ في جلب الغرفة:', roomErr);
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    questionInput.disabled = false;
                    return;
                }

                if (room.qa_asker_id !== OS.myPlayerId) {
                    showToast('⚠️ لست السائل في هذه الجولة', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    questionInput.disabled = false;
                    return;
                }

                if (room.qa_question_submitted) {
                    showToast('⚠️ تم إرسال السؤال بالفعل', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    questionInput.disabled = false;
                    return;
                }

                if (room.qa_phase !== 'asking' && room.qa_phase !== 'waiting') {
                    showToast('⏳ ليس وقت السؤال الآن', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    questionInput.disabled = false;
                    return;
                }

                const updateResult = await sb.from('rooms')
                    .update({
                        qa_question: question,
                        qa_question_submitted: true,
                        qa_phase: 'answering',
                        qa_start_time: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', OS.roomId);

                if (updateResult.error) {
                    console.error('❌ فشل إرسال السؤال:', updateResult.error);
                    showToast('❌ فشل إرسال السؤال: ' + updateResult.error.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    questionInput.disabled = false;
                    return;
                }

                console.log('✅ تم إرسال السؤال بنجاح:', question);
                showToast('✅ تم إرسال السؤال!', 'success');
                hapticSuccessWithSound();

                btn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>تم الإرسال ✓</span>`;
                btn.disabled = true;

                questionInput.value = '';
                questionInput.disabled = true;

                const { data: updatedRoom } = await sb.from('rooms')
                    .select('*')
                    .eq('id', OS.roomId)
                    .single();

                if (updatedRoom) {
                    const spectatorQText = document.getElementById('qa-spectator-q-text');
                    if (spectatorQText) {
                        spectatorQText.textContent = `"${esc(question)}"`;
                    }

                    const receivedQ = document.getElementById('online-qa-received-q');
                    if (receivedQ) {
                        receivedQ.textContent = `"${esc(question)}"`;
                    }

                    const answerInput = document.getElementById('online-qa-answer-input');
                    const sendABtn = document.getElementById('btn-online-qa-send-a');
                    const respondentId = updatedRoom.qa_respondent_id;
                    const myPlayer = OS.gameData?.players?.find(p => p.client_id === OS.clientId);

                    if (myPlayer && myPlayer.id === respondentId) {
                        if (answerInput) answerInput.disabled = false;
                        if (sendABtn) {
                            sendABtn.disabled = false;
                            sendABtn.innerHTML = `<i class="fa-solid fa-reply"></i> <span>إرسال الإجابة</span>`;
                        }
                        if (answerInput) answerInput.focus();
                    }

                    updateRoleBadge(updatedRoom);
                }

            } catch (e) {
                console.error('❌ خطأ غير متوقع في إرسال السؤال:', e);
                showToast('❌ حدث خطأ غير متوقع: ' + e.message, 'error');
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-rotate"></i> <span>فشل، حاول مرة أخرى</span>`;
                questionInput.disabled = false;
            }
        }

        // ===== إرسال الإجابة =====
        async function sendAnswer() {
            const sb = OS.supabase;
            if (!sb || !OS.roomId) {
                showToast('❌ لا يوجد اتصال بقاعدة البيانات', 'error');
                return;
            }

            const answerInput = document.getElementById('online-qa-answer-input');
            if (!answerInput) {
                showToast('❌ خطأ في واجهة المستخدم', 'error');
                return;
            }

            const answer = answerInput.value.trim();
            if (!answer) {
                showToast('✏️ اكتب إجابة!', 'warning');
                answerInput.focus();
                return;
            }

            const btn = document.getElementById('btn-online-qa-send-a');
            if (btn.disabled) return;

            btn.disabled = true;
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>جاري الإرسال...</span>`;

            answerInput.disabled = true;

            try {
                console.log('📤 محاولة إرسال الإجابة:', answer);

                const { data: room, error: roomErr } = await sb.from('rooms')
                    .select('qa_respondent_id, qa_answer_submitted, qa_question, qa_phase, status, qa_round, qa_asker_id')
                    .eq('id', OS.roomId)
                    .single();

                if (roomErr || !room) {
                    showToast('❌ خطأ في جلب بيانات الغرفة', 'error');
                    console.error('❌ خطأ في جلب الغرفة:', roomErr);
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    answerInput.disabled = false;
                    return;
                }

                if (room.qa_respondent_id !== OS.myPlayerId) {
                    showToast('⚠️ لست المجيب في هذه الجولة', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    answerInput.disabled = false;
                    return;
                }

                if (room.qa_answer_submitted) {
                    showToast('⚠️ تم إرسال الإجابة بالفعل', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    answerInput.disabled = false;
                    return;
                }

                if (!room.qa_question) {
                    showToast('⚠️ لا يوجد سؤال للإجابة عليه', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    answerInput.disabled = false;
                    return;
                }

                if (room.qa_phase !== 'answering') {
                    showToast('⏳ ليس وقت الإجابة الآن', 'warning');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    answerInput.disabled = false;
                    return;
                }

                const updateResult = await sb.from('rooms')
                    .update({
                        qa_answer: answer,
                        qa_answered: true,
                        qa_answer_submitted: true,
                        qa_phase: 'done',
                        qa_round_complete: true,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', OS.roomId);

                if (updateResult.error) {
                    console.error('❌ فشل إرسال الإجابة:', updateResult.error);
                    showToast('❌ فشل إرسال الإجابة: ' + updateResult.error.message, 'error');
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    answerInput.disabled = false;
                    return;
                }

                console.log('✅ تم إرسال الإجابة بنجاح:', answer);
                showToast('✅ تم إرسال الإجابة!', 'success');
                hapticSuccessWithSound();

                btn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>تم الإرسال ✓</span>`;
                btn.disabled = true;

                answerInput.value = '';
                answerInput.disabled = true;

                await saveQAHistory(
                    OS.roomId,
                    room.qa_round || 0,
                    room.qa_asker_id,
                    room.qa_respondent_id,
                    room.qa_question,
                    answer
                );

                const { data: updatedRoom } = await sb.from('rooms')
                    .select('*')
                    .eq('id', OS.roomId)
                    .single();

                if (updatedRoom) {
                    const spectatorAText = document.getElementById('qa-spectator-a-text');
                    if (spectatorAText) {
                        spectatorAText.textContent = `"${esc(answer)}"`;
                        spectatorAText.className = 'text-xs font-semibold text-slate-200';
                    }

                    handleQaUpdate(updatedRoom);
                    updateRoleBadge(updatedRoom);
                    showNextRoundReadyButton(updatedRoom);
                }

                await loadAndDisplayHistory(OS.roomId);

            } catch (e) {
                console.error('❌ خطأ غير متوقع في إرسال الإجابة:', e);
                showToast('❌ حدث خطأ غير متوقع: ' + e.message, 'error');
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-rotate"></i> <span>فشل، حاول مرة أخرى</span>`;
                answerInput.disabled = false;
            }
        }

        // ===== حفظ سجل الأسئلة =====
        async function saveQAHistory(roomId, round, askerId, respondentId, question, answer) {
    const sb = OS.supabase;
    if (!sb) return;
    try {
        await sb.from('qa_history').insert({
            room_id: roomId,
            round_number: round,
            asker_id: askerId,
            respondent_id: respondentId,
            question: question || 'لم يتم طرح سؤال',
            answer: answer || 'لم يتم الإجابة',
            created_at: new Date().toISOString()
        });
        console.log(`📝 تم حفظ السؤال ${round + 1}:`, { question, answer });
    } catch (e) {
        console.error('❌ فشل حفظ السجل:', e);
        // 🔥 الحل: لا نعرض خطأ للمستخدم
        // نكتفي بتسجيل الخطأ في الكونسول
    }
}

        // ===== تحميل سجل الأسئلة =====
        async function loadQAHistory(roomId) {
            const sb = OS.supabase;
            if (!sb) return [];
            try {
                const { data, error } = await sb.from('qa_history')
                    .select('*')
                    .eq('room_id', roomId)
                    .order('round_number', { ascending: true })
                    .order('created_at', { ascending: true });
                if (error) {
                    console.error('❌ فشل جلب السجل:', error);
                    return [];
                }
                return data || [];
            } catch (e) {
                console.error('❌ فشل جلب السجل:', e);
                return [];
            }
        }

        // ===== عرض سجل الأسئلة =====
        function displayQAHistory(history, containerId, players) {
            const container = document.getElementById(containerId);
            if (!container) return;

            if (!history || history.length === 0) {
                container.innerHTML = '<div class="text-slate-500 text-xs text-center py-2">لا توجد جولات سابقة</div>';
                return;
            }

            let html = '';
            history.forEach(h => {
                const asker = players?.find(p => p.id === h.asker_id)?.player_name || '???';
                const respondent = players?.find(p => p.id === h.respondent_id)?.player_name || '???';
                html += `
                    <div class="bg-slate-900/60 p-3 rounded-2xl border border-slate-800 space-y-2 text-xs">
                        <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 border-b border-slate-800/80 pb-1.5">
                            <span>الجولة ${h.round_number + 1}</span>
                            <span class="text-slate-500">مكتملة</span>
                        </div>
                        <div class="space-y-1">
                            <p class="text-cyan-300 font-bold"><strong class="text-slate-400 font-normal">سأل ${esc(asker)} ${esc(respondent)}:</strong> "${esc(h.question)}"</p>
                            <p class="text-purple-300"><strong class="text-slate-400 font-normal">أجاب ${esc(respondent)}:</strong> "${esc(h.answer)}"</p>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        async function loadAndDisplayHistory(roomId) {
            const history = await loadQAHistory(roomId);
            const players = OS.gameData?.players || [];
            displayQAHistory(history, 'qa-history-list', players);
        }

        // ===== عرض شاشة الأسئلة =====
        async function showOnlineQA() {
            showScreen('online-qa');
            const sb = OS.supabase;
            if (!sb || !OS.roomId) return;

            setupQaRealtime(OS.roomId);

            try {
                const { data: room, error: roomErr } = await sb.from('rooms').select('*').eq('id', OS.roomId).single();
                if (roomErr || !room) {
                    showToast('❌ خطأ في تحميل الغرفة', 'error');
                    return;
                }

                const { data: players, error: pErr } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
                if (pErr || !players) {
                    showToast('❌ خطأ في تحميل اللاعبين', 'error');
                    return;
                }

                OS.gameData = { room, players };

                const currentRound = room.qa_round || 0;
                const totalRounds = room.qa_total_rounds || players.length;
                const roundDisplay = document.getElementById('online-qa-round-display');
                if (roundDisplay) {
                    const displayRound = Math.min(currentRound + 1, totalRounds);
                    roundDisplay.textContent = `الجولة ${displayRound} من ${totalRounds}`;
                }

                const askerName = getPlayerName(room.qa_asker_id);
                const respondentName = getPlayerName(room.qa_respondent_id);

                const askerNameEl = document.getElementById('qa-asker-name');
                if (askerNameEl) askerNameEl.textContent = askerName || '—';

                const respondentNameEl = document.getElementById('qa-respondent-name');
                if (respondentNameEl) respondentNameEl.textContent = respondentName || '—';

                if (askerName) {
                    const avatar = document.getElementById('qa-asker-avatar');
                    if (avatar) avatar.textContent = askerName.charAt(0).toUpperCase();
                }
                if (respondentName) {
                    const avatar = document.getElementById('qa-respondent-avatar');
                    if (avatar) avatar.textContent = respondentName.charAt(0).toUpperCase();
                }

                await loadAndDisplayHistory(OS.roomId);

                updateMyRole(room);

                const sendQBtn = document.getElementById('btn-online-qa-send-q');
                if (sendQBtn) {
                    sendQBtn.onclick = sendQuestion;
                }

                const sendABtn = document.getElementById('btn-online-qa-send-a');
                if (sendABtn) {
                    sendABtn.onclick = sendAnswer;
                }

                const questionInput = document.getElementById('online-qa-question-input');
                if (questionInput) {
                    questionInput.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendQuestion();
                        }
                    });
                }

                const answerInput = document.getElementById('online-qa-answer-input');
                if (answerInput) {
                    answerInput.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendAnswer();
                        }
                    });
                }

                const leaveBtn = document.getElementById('btn-online-qa-leave');
                if (leaveBtn) {
                    leaveBtn.onclick = async () => {
                        TimerManager.clearAll();
                        await leaveOnlineRoom();
                        showScreen('online-room');
                        renderOnlineRoom();
                        showToast('🚪 تمت المغادرة', 'info');
                        hapticAndSound('click');
                    };
                }

                if (room.qa_round_complete) {
                    showNextRoundReadyButton(room);
                } else {
                    hideNextRoundReadyButton();
                }

            } catch (e) {
                console.error('❌ فشل عرض شاشة الأسئلة:', e);
                showToast('❌ فشل تحميل البيانات', 'error');
            }
        }

        // ===== تحديث شاشة الأسئلة عند التغيير =====
        function refreshQAView(room) {
            if (!room) return;

            const players = room.room_players || [];
            const myPlayer = players.find(p => p.client_id === OS.clientId);
            if (!myPlayer) return;

            const currentRound = room.qa_round || 0;
            const totalRounds = room.qa_total_rounds || players.length;
            const roundDisplay = document.getElementById('online-qa-round-display');
            if (roundDisplay) {
                const displayRound = Math.min(currentRound + 1, totalRounds);
                roundDisplay.textContent = `الجولة ${displayRound} من ${totalRounds}`;
            }

            const askerName = getPlayerName(room.qa_asker_id);
            const respondentName = getPlayerName(room.qa_respondent_id);

            const askerNameEl = document.getElementById('qa-asker-name');
            if (askerNameEl) askerNameEl.textContent = askerName || '—';

            const respondentNameEl = document.getElementById('qa-respondent-name');
            if (respondentNameEl) respondentNameEl.textContent = respondentName || '—';

            if (askerName) {
                const avatar = document.getElementById('qa-asker-avatar');
                if (avatar) avatar.textContent = askerName.charAt(0).toUpperCase();
            }
            if (respondentName) {
                const avatar = document.getElementById('qa-respondent-avatar');
                if (avatar) avatar.textContent = respondentName.charAt(0).toUpperCase();
            }

            if (room.qa_question) {
                const spectatorQText = document.getElementById('qa-spectator-q-text');
                if (spectatorQText) spectatorQText.textContent = `"${esc(room.qa_question)}"`;

                const receivedQ = document.getElementById('online-qa-received-q');
                if (receivedQ) receivedQ.textContent = `"${esc(room.qa_question)}"`;
            }

            if (room.qa_answer && room.qa_answered) {
                const spectatorAText = document.getElementById('qa-spectator-a-text');
                if (spectatorAText) {
                    spectatorAText.textContent = `"${esc(room.qa_answer)}"`;
                    spectatorAText.className = 'text-xs font-semibold text-slate-200';
                }

                const myPlayerLocal = players.find(p => p.client_id === OS.clientId);
                const isAsker = myPlayerLocal && myPlayerLocal.id === room.qa_asker_id;
                const responseBox = document.getElementById('qa-asker-response-box');
                const responseText = document.getElementById('qa-asker-response-text');
                if (responseBox && responseText) {
                    if (isAsker) {
                        responseBox.classList.remove('hidden');
                        responseText.textContent = `"${esc(room.qa_answer)}"`;
                    } else {
                        responseBox.classList.add('hidden');
                    }
                }
            }

            updateMyRole(room);

            if (room.qa_round_complete) {
                showNextRoundReadyButton(room);
            } else {
                hideNextRoundReadyButton();
            }

            const askerLabel = document.getElementById('qa-respondent-asker-label');
            if (askerLabel && askerName) {
                askerLabel.textContent = `${askerName} يسألك:`;
            }

            const specAskerLabel = document.getElementById('qa-spectator-asker-label');
            if (specAskerLabel && askerName && respondentName) {
                specAskerLabel.textContent = `${askerName} يسأل ${respondentName}:`;
            }
            const specRespondentLabel = document.getElementById('qa-spectator-respondent-label');
            if (specRespondentLabel && respondentName) {
                specRespondentLabel.textContent = `${respondentName} يجيب:`;
            }

            loadAndDisplayHistory(OS.roomId);
        }

        // ===== دالة تبديل سجل الأسئلة =====
        function toggleQAHistory() {
            const content = document.getElementById('history-content');
            const arrow = document.getElementById('history-arrow');

            if (content) content.classList.toggle('hidden');
            if (arrow) arrow.classList.toggle('rotated');
        }

        // ==============================================================
        // ===== مرحلة التصويت =====
        // ==============================================================

        async function showOnlineVoting() {
    showScreen('online-voting');
    const sb = OS.supabase;
    if (!sb || !OS.roomId) return;

    const room = OS.gameData?.room;
    const players = OS.gameData?.players || [];
    const myPlayer = players.find(p => p.client_id === OS.clientId);
    if (!myPlayer || !room) return;

    const round = room.current_round || 0;
    const instruction = document.getElementById('online-voting-instruction');
    const optionsDiv = document.getElementById('online-voting-options');
    const statusDiv = document.getElementById('online-voting-status');
    const doneBtn = document.getElementById('btn-online-voting-done');

    // التحقق من وجود تصويت سابق
    const { data: existingVote } = await sb.from('votes')
        .select('*')
        .eq('room_id', room.id)
        .eq('round_number', round)
        .eq('voter_id', OS.myPlayerId)
        .maybeSingle();

    // إيقاف أي مؤقت سابق
    if (OS._voteInterval) {
        clearInterval(OS._voteInterval);
        OS._voteInterval = null;
    }

    if (existingVote) {
        instruction.innerHTML = `<i class="fa-solid fa-check-circle text-emerald-400 ml-1"></i> لقد صوّت. في انتظار الآخرين...`;
        optionsDiv.innerHTML = '';
        await refreshVotingView(room, players);
        // إظهار زر الجاهزية إذا كان اللاعب قد صوّت
        showReadyForResultButton(room, players);
        return;
    }

    instruction.textContent = `صوّت على من تعتقد أنه برا السالفة (جولة ${round+1})`;

    optionsDiv.innerHTML = players
        .filter(p => p.id !== OS.myPlayerId)
        .map((p, i) => `
            <div class="vote-opt-option bg-white/[0.025] border-2 border-white/5 rounded-2xl p-4 cursor-pointer transition-all hover:border-rose-500 hover:bg-rose-500/5 text-center min-h-[46px] flex items-center justify-center gap-3 font-bold text-white" 
                 data-target="${p.id}" tabindex="0" role="button">
                ${avHTML(p.player_name, i, 'sm')} <span>${esc(p.player_name)}</span>
            </div>
        `).join('');

    statusDiv.textContent = 'اختر لاعباً للتصويت عليه';
    doneBtn.classList.add('hidden');

    // معالج التصويت
    optionsDiv.querySelectorAll('.vote-opt-option').forEach(el => {
        el.addEventListener('click', async () => {
            const targetId = el.dataset.target;
            optionsDiv.querySelectorAll('.vote-opt-option').forEach(opt => {
                opt.style.pointerEvents = 'none';
                opt.style.opacity = '0.5';
            });

            try {
                const { error } = await sb.from('votes').insert({
                    room_id: room.id,
                    round_number: round,
                    voter_id: OS.myPlayerId,
                    target_id: targetId,
                    created_at: new Date().toISOString()
                });

                if (error) {
                    showAlert('❌ فشل التصويت: ' + error.message, 'error');
                    optionsDiv.querySelectorAll('.vote-opt-option').forEach(opt => {
                        opt.style.pointerEvents = 'auto';
                        opt.style.opacity = '1';
                    });
                    return;
                }

                hapticSuccessWithSound();
                playSound('vote');
                showToast('✅ تم تسجيل تصويتك!', 'success');
                instruction.innerHTML = `<i class="fa-solid fa-check-circle text-emerald-400 ml-1"></i> لقد صوّت. في انتظار الآخرين...`;
                optionsDiv.innerHTML = '';
                await refreshVotingView(room, players);
                // إظهار زر الجاهزية بعد التصويت
                showReadyForResultButton(room, players);

                if (OS.isHost) {
                    // تحديث فوري للتحقق من جاهزية الجميع
                    setTimeout(() => {
                        hostCheckVotingComplete(players, room);
                    }, 500);
                }

            } catch (e) {
                console.error('Vote error:', e);
                showToast('❌ حدث خطأ، حاول مرة أخرى', 'error');
                optionsDiv.querySelectorAll('.vote-opt-option').forEach(opt => {
                    opt.style.pointerEvents = 'auto';
                    opt.style.opacity = '1';
                });
            }
        });
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                el.click();
            }
        });
    });

    // زر "تسريع النتيجة" للمضيف (يبقى كخيار احتياطي)
    if (OS.isHost) {
        doneBtn.classList.remove('hidden');
        doneBtn.textContent = '⚡ تسريع النتيجة';
        // في دالة showOnlineVoting، عند تعريف doneBtn.onclick
doneBtn.onclick = async () => {
    if (ButtonManager.isDisabled('btn-online-voting-done')) return;
    
    // 🔥 الحل: رسالة تأكيد
    showCustomModal(
        '⚠️ تسريع النتيجة',
        'سيتم كشف النتيجة دون انتظار جاهزية جميع اللاعبين. هل أنت متأكد؟',
        'warning',
        'نعم، كشف النتيجة',
        'إلغاء',
        async () => {
            ButtonManager.disable('btn-online-voting-done', 'جاري الكشف...');
            await sb.from('rooms').update({
                status: 'suspense',
                updated_at: new Date().toISOString()
            }).eq('id', room.id);
            showToast('🔮 جارٍ كشف النتيجة...', 'success');
            hapticSuccessWithSound();
            ButtonManager.enable('btn-online-voting-done');
        }
    );
};
    }

    // بدء تحديث دوري للواجهة
    OS._voteInterval = setInterval(async () => {
        if (!OS.roomId) return;
        const { data: freshPlayers } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
        if (freshPlayers) {
            OS.gameData = { ...OS.gameData, players: freshPlayers };
            // تحديث عداد الجاهزية
            updateReadyCountUI(room, freshPlayers);
        }
        // التحقق من اكتمال التصويت
        await refreshVotingView(room, freshPlayers || players);
        // إعادة عرض زر الجاهزية إذا لزم الأمر
        showReadyForResultButton(room, freshPlayers || players);
    }, 3000);
}

// دالة إظهار زر الجاهزية للاعب بعد التصويت
async function showReadyForResultButton(room, players) {
    const myPlayer = players.find(p => p.client_id === OS.clientId);
    if (!myPlayer) return;

    const round = room.current_round || 0;
    const sb = OS.supabase;
    if (!sb) return;

    // التحقق من أن اللاعب قد صوّت
    const { data: vote } = await sb.from('votes')
        .select('id')
        .eq('room_id', room.id)
        .eq('round_number', round)
        .eq('voter_id', OS.myPlayerId)
        .maybeSingle();

    if (!vote) return; // لم يصوت بعد

    // التحقق من وجود زر الجاهزية بالفعل
    let readyBtn = document.getElementById('btn-ready-for-result');
    if (!readyBtn) {
        const container = document.getElementById('online-voting-options');
        if (!container) return;
        // إضافة زر الجاهزية أسفل خيارات التصويت
        readyBtn = document.createElement('button');
        readyBtn.id = 'btn-ready-for-result';
        readyBtn.className = 'w-full py-3.5 rounded-2xl font-bold text-sm bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4';
        readyBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>جاهز للنتيجة</span>`;
        container.parentNode.insertBefore(readyBtn, container.nextSibling);
    }

    // تحديث حالة الزر بناءً على جاهزية اللاعب
    if (myPlayer.ready_for_result) {
        readyBtn.className = 'w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-default';
        readyBtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>جاهز ✓</span>`;
        readyBtn.disabled = true;
    } else {
        readyBtn.className = 'w-full py-3.5 rounded-2xl font-bold text-sm bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all flex items-center justify-center gap-2';
        readyBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>جاهز للنتيجة</span>`;
        readyBtn.disabled = false;
        readyBtn.onclick = async () => {
            if (ButtonManager.isDisabled('btn-ready-for-result')) return;
            ButtonManager.disable('btn-ready-for-result', 'جاري التجهيز...');
            try {
                await sb.from('room_players')
                    .update({ ready_for_result: true })
                    .eq('id', OS.myPlayerId);
                hapticSuccessWithSound();
                showToast('✅ تم تسجيل جاهزيتك!', 'success');
                // تحديث الواجهة
                await refreshVotingView(room, players);
                if (OS.isHost) {
                    hostCheckVotingComplete(players, room);
                }
            } catch (e) {
                showToast('❌ حدث خطأ، حاول مرة أخرى', 'error');
                console.error(e);
            } finally {
                ButtonManager.enable('btn-ready-for-result');
            }
        };
    }

    // تحديث عداد الجاهزية
    updateReadyCountUI(room, players);
}

function updateReadyCountUI(room, players) {
    const readyCount = players.filter(p => p.ready_for_result === true).length;
    const total = players.length;
    const statusDiv = document.getElementById('online-voting-status');
    if (statusDiv) {
        if (readyCount === total) {
            statusDiv.innerHTML = `<i class="fa-solid fa-check-circle text-emerald-400 ml-1"></i> الجميع جاهز!`;
        } else {
            statusDiv.textContent = `⏳ جاهزية النتيجة: ${readyCount}/${total}`;
        }
    }
}

        async function refreshVotingView(room, players) {
    const round = room.current_round || 0;
    const myPlayer = players.find(p => p.client_id === OS.clientId);
    if (!myPlayer) return;

    const sb = OS.supabase;
    if (!sb) return;

    const { data: votes } = await sb
        .from('votes')
        .select('voter_id, target_id')
        .eq('room_id', OS.roomId)
        .eq('round_number', round);

    const votedIds = votes ? votes.map(v => v.voter_id) : [];
    const allPlayers = players.map(p => p.id);
    const allVoted = allPlayers.every(id => votedIds.includes(id));

    const statusDiv = document.getElementById('online-voting-status');
    const doneBtn = document.getElementById('btn-online-voting-done');

    if (allVoted) {
        // جميع اللاعبين صوتوا، نعرض زر الجاهزية
        if (statusDiv) {
            statusDiv.innerHTML = `<i class="fa-solid fa-check-circle text-emerald-400 ml-1"></i> الجميع صوّت! انتظر الجاهزية...`;
        }
        // عرض زر الجاهزية لكل لاعب إذا لم يظهر بعد
        showReadyForResultButton(room, players);
        // تحديث عداد الجاهزية
        updateReadyCountUI(room, players);
        // إذا كان المضيف، نعرض زر "تسريع النتيجة" كخيار احتياطي
        if (OS.isHost) {
            doneBtn.classList.remove('hidden');
            doneBtn.textContent = '⚡ تسريع النتيجة';
            doneBtn.onclick = async () => {
                if (ButtonManager.isDisabled('btn-online-voting-done')) return;
                ButtonManager.disable('btn-online-voting-done', 'جاري الكشف...');
                await sb.from('rooms').update({
                    status: 'suspense',
                    updated_at: new Date().toISOString()
                }).eq('id', room.id);
                showToast('🔮 جارٍ كشف النتيجة...', 'success');
                hapticSuccessWithSound();
                ButtonManager.enable('btn-online-voting-done');
            };
        } else {
            doneBtn.classList.add('hidden');
        }
    } else {
        if (statusDiv) {
            statusDiv.textContent = `⏳ في انتظار تصويت الجميع... (${votedIds.length}/${allPlayers.length})`;
        }
        doneBtn.classList.add('hidden');
        // إخفاء زر الجاهزية إذا لم يكتمل التصويت
        const readyBtn = document.getElementById('btn-ready-for-result');
        if (readyBtn) readyBtn.remove();
    }
}

        async function hostCheckVotingComplete(players, room) {
    if (!OS.isHost || !room || OS.stageLock) return;
    if (room.status !== 'voting') return;

    const round = room.current_round || 0;
    const sb = OS.supabase;
    if (!sb) return;

    // ==========================================================
    // 🔥 التعديل التاسع: إعادة تعيين ready_for_result للجميع 
    //    عند بداية التصويت (مرة واحدة فقط)
    // ==========================================================
    // نتحقق إذا كنا قد أعدنا التعيين مسبقاً في هذه الجولة
    if (!window._votingResetDone) {
        await sb.from('room_players')
            .update({ ready_for_result: false })
            .eq('room_id', room.id);
        window._votingResetDone = true;
        console.log('✅ تم إعادة تعيين ready_for_result لجميع اللاعبين');
    }

    // التحقق من أن جميع اللاعبين قد صوّتوا
    const { data: votes } = await sb.from('votes')
        .select('voter_id')
        .eq('room_id', room.id)
        .eq('round_number', round);
    const votedIds = votes ? votes.map(v => v.voter_id) : [];
    const allVoted = players.every(p => votedIds.includes(p.id));

    if (!allVoted) {
        // تحديث واجهة المستخدم بعدد المصوتين
        const statusDiv = document.getElementById('online-voting-status');
        if (statusDiv) {
            statusDiv.textContent = `⏳ في انتظار تصويت الجميع... (${votedIds.length}/${players.length})`;
        }
        return;
    }

    // التحقق من جاهزية جميع اللاعبين (ready_for_result)
    const allReady = players.every(p => p.ready_for_result === true);
    if (!allReady) {
        const readyCount = players.filter(p => p.ready_for_result === true).length;
        const statusDiv = document.getElementById('online-voting-status');
        if (statusDiv) {
            statusDiv.textContent = `⏳ في انتظار جاهزية الجميع... (${readyCount}/${players.length})`;
        }
        return;
    }

    // جميع اللاعبين صوتوا وجاهزين => الانتقال إلى suspense
    console.log('🎯 جميع اللاعبين صوتوا وجاهزين، الهوست ينتقل للتشويق...');
    OS.stageLock = true;

    try {
        await sb.from('rooms').update({
            status: 'suspense',
            updated_at: new Date().toISOString()
        }).eq('id', room.id);

        let retries = 0;
        let confirmed = false;
        while (retries < 10 && !confirmed) {
            await new Promise(resolve => setTimeout(resolve, 300));
            const { data: check } = await sb.from('rooms').select('status').eq('id', room.id).single();
            if (check && check.status === 'suspense') {
                confirmed = true;
                break;
            }
            retries++;
        }

        if (confirmed) {
            showToast('🔮 جارٍ كشف النتيجة...', 'success');
            hapticSuccessWithSound();
            OS.currentPhase = 'suspense';
            lastPhase = 'suspense';
            // إعادة تعيين العلم للجولة القادمة
            window._votingResetDone = false;
            showOnlineSuspense();
        } else {
            showAlert('⚠️ فشل الانتقال لمرحلة التشويق', 'warning');
        }
    } catch (e) {
        console.error('hostCheckVotingComplete error:', e);
        showAlert('❌ فشل الانتقال للمرحلة التالية: ' + e.message, 'error');
    } finally {
        OS.stageLock = false;
    }
}

        // ==============================================================
        // ===== مرحلة التشويق =====
        // ==============================================================

        async function showOnlineSuspense() {
    showScreen('online-suspense');
    const sb = OS.supabase;
    if (!sb || !OS.roomId) return;

    const room = OS.gameData?.room;
    const players = OS.gameData?.players || [];
    if (!room) return;

    const round = room.current_round || 0;
    const content = document.getElementById('online-suspense-content');
    const headline = document.getElementById('online-suspense-headline');
    const continueBtn = document.getElementById('btn-online-suspense-continue');

    // إخفاء زر المتابعة مؤقتاً
    continueBtn.classList.add('hidden');

    // إيقاف أي مؤقت سابق في مرحلة التشويق
    if (OS._suspenseInterval) {
        clearInterval(OS._suspenseInterval);
        OS._suspenseInterval = null;
    }

    // حساب النتيجة
    const { data: votes } = await sb.from('votes').select('*').eq('room_id', room.id).eq('round_number', round);
    if (!votes || votes.length === 0) {
        content.innerHTML = '<p class="text-[#8892a6]">لا توجد أصوات مسجلة...</p>';
        return;
    }

    // حساب الأصوات
    const counts = {};
    votes.forEach(v => { counts[v.target_id] = (counts[v.target_id] || 0) + 1; });
    let maxCount = 0, maxTarget = null;
    for (const [id, c] of Object.entries(counts)) {
        if (c > maxCount) { maxCount = c; maxTarget = id; }
    }

    const oddPlayer = players.find(p => p.is_odd === true);
    const oddName = oddPlayer ? oddPlayer.player_name : '???';
    const targetPlayer = players.find(p => p.id === maxTarget);
    const targetName = targetPlayer ? targetPlayer.player_name : '???';
    const isOddCaught = (maxTarget === oddPlayer?.id);

    headline.textContent = isOddCaught ? '🔮 تم كشف برا السالفة!' : '😈 برا السالفة نجا!';

    // تنظيف المحتوى القديم
    content.innerHTML = `
        <div class="glass-panel rounded-2xl p-6 text-center">
            <p class="text-[#8892a6]">اللاعب الأكثر تصويتاً:</p>
            <h1 class="text-rose-500 font-black text-3xl mt-2">${esc(targetName)} (${maxCount} صوت)</h1>
        </div>
        <div class="glass-panel rounded-2xl p-6 text-center border-2 ${isOddCaught?'border-lime-400':'border-rose-500'}">
            <p class="text-[#8892a6]">${isOddCaught?'✅ تم الكشف!':'❌ لم يتم الكشف!'}</p>
            <h1 class="${isOddCaught?'text-lime-400':'text-rose-500'} font-black text-2xl mt-2">برا السالفة كان: ${esc(oddName)}</h1>
            <p class="text-[#8892a6] text-sm mt-2">الكلمة السرية: <span class="text-cyan-400 font-bold">${esc(room.secret_word||'???')}</span></p>
        </div>
    `;

    if (isOddCaught) {
        // إذا تم كشفه، نضيف زر جاهزية لفرصة الإنقاذ
        const readyBtn = document.createElement('button');
        readyBtn.id = 'btn-suspense-ready';
        readyBtn.className = 'w-full py-3.5 rounded-2xl font-bold text-sm bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4';
        readyBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>جاهز لفرصة الإنقاذ</span>`;
        content.appendChild(readyBtn);

        // ==========================================================
        // 🔥 المشكلة 4: التحقق من وجود عداد الجاهزية قبل إنشائه
        // ==========================================================
        let counter = document.getElementById('suspense-ready-counter');
        if (!counter) {
            counter = document.createElement('p');
            counter.id = 'suspense-ready-counter';
            counter.className = 'text-xs text-slate-400 text-center mt-2';
            content.appendChild(counter);
        } else {
            // إذا كان موجوداً، نعيد تعيين محتواه
            counter.textContent = '';
        }

        // التحقق من جاهزية اللاعب
        const myPlayer = players.find(p => p.client_id === OS.clientId);
        if (myPlayer && myPlayer.ready_for_result) {
            readyBtn.className = 'w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-default';
            readyBtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>جاهز ✓</span>`;
            readyBtn.disabled = true;
        } else {
            readyBtn.onclick = async () => {
                if (ButtonManager.isDisabled('btn-suspense-ready')) return;
                ButtonManager.disable('btn-suspense-ready', 'جاري التجهيز...');
                try {
                    await sb.from('room_players')
                        .update({ ready_for_result: true })
                        .eq('id', OS.myPlayerId);
                    hapticSuccessWithSound();
                    showToast('✅ تم تسجيل جاهزيتك!', 'success');
                    readyBtn.className = 'w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-default';
                    readyBtn.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>جاهز ✓</span>`;
                    readyBtn.disabled = true;
                    ButtonManager.enable('btn-suspense-ready');

                    // تحديث العداد
                    updateSuspenseCounter();

                    // التحقق من جاهزية الجميع
                    if (OS.isHost) {
                        setTimeout(async () => {
                            const { data: freshPlayers } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
                            if (freshPlayers && freshPlayers.every(p => p.ready_for_result === true)) {
                                await sb.from('rooms').update({
                                    status: 'secondchance',
                                    updated_at: new Date().toISOString()
                                }).eq('id', room.id);
                                showToast('🎯 الجميع جاهز!', 'success');
                            }
                        }, 500);
                    }
                } catch (e) {
                    showToast('❌ حدث خطأ، حاول مرة أخرى', 'error');
                    console.error(e);
                    ButtonManager.enable('btn-suspense-ready');
                }
            };
        }

        // دالة تحديث عداد الجاهزية
        const updateSuspenseCounter = async () => {
            try {
                const { data: freshPlayers } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
                if (freshPlayers) {
                    const readyCount = freshPlayers.filter(p => p.ready_for_result === true).length;
                    const counterEl = document.getElementById('suspense-ready-counter');
                    if (counterEl) {
                        counterEl.textContent = `جاهز ${readyCount} من ${freshPlayers.length}`;
                    }
                }
            } catch (e) {
                console.error('Error updating counter:', e);
            }
        };

        // تحديث العداد فوراً
        updateSuspenseCounter();

        // تحديث العداد دورياً
        OS._suspenseInterval = setInterval(updateSuspenseCounter, 3000);

    } else {
        // إذا لم يتم كشفه، ننتقل مباشرة للنتائج
        continueBtn.textContent = '🏆 عرض النتائج';
        continueBtn.classList.remove('hidden');
        continueBtn.onclick = async () => {
            if (ButtonManager.isDisabled('btn-online-suspense-continue')) return;
            ButtonManager.disable('btn-online-suspense-continue', 'جاري الانتقال...');
            await sb.from('rooms').update({ status: 'leaderboard', updated_at: new Date().toISOString() }).eq('id', room.id);
            showToast('🏆 النتائج النهائية!', 'success');
            hapticSuccessWithSound();
            ButtonManager.enable('btn-online-suspense-continue');
        };
    }
}

        // ==============================================================
        // ===== مرحلة فرصة الإنقاذ =====
        // ==============================================================

        async function showOnlineSecondChance() {
            showScreen('online-secondchance');
            const sb = OS.supabase;
            if (!sb || !OS.roomId) return;

            const room = OS.gameData?.room;
            const players = OS.gameData?.players || [];
            const myPlayer = players.find(p => p.client_id === OS.clientId);
            if (!room || !myPlayer) return;

            const prompt = document.getElementById('online-sc-prompt');
            const optionsDiv = document.getElementById('online-sc-options');
            const confirmBtn = document.getElementById('btn-online-sc-confirm');
            const resultDiv = document.getElementById('online-sc-result');
            const nextBtn = document.getElementById('btn-online-sc-next');

            const oddPlayer = players.find(p => p.is_odd === true);
            const isOdd = myPlayer.is_odd || false;

            if (!isOdd) {
                prompt.textContent = '⏳ في انتظار لاعب برا السالفة لاختيار الكلمة...';
                optionsDiv.innerHTML = '';
                confirmBtn.classList.add('hidden');
                resultDiv.textContent = '';
                nextBtn.classList.add('hidden');
                return;
            }

            prompt.textContent = `${myPlayer.player_name}، اختر الكلمة السرية الصحيحة للإنقاذ!`;

            const cluster = WORD_CLUSTERS[room.category || Object.keys(WORD_CLUSTERS)[0]]
                ?.find(c => c.includes(room.secret_word || '')) || [room.secret_word || '???', 'خيار1', 'خيار2', 'خيار3'];
            const correct = room.secret_word || '???';
            const distractors = shuffle(cluster.filter(w => w !== correct)).slice(0, 3);
            const options = shuffle([correct, ...distractors]);

            optionsDiv.innerHTML = options.map(w => `
                <div class="vote-opt-option bg-white/[0.025] border-2 border-white/5 rounded-2xl p-4 cursor-pointer transition-all hover:border-lime-400 hover:bg-lime-400/5 text-center min-h-[46px] flex items-center justify-center font-bold text-white" 
                     data-word="${esc(w)}" tabindex="0" role="button">
                    <span>${esc(w)}</span>
                </div>
            `).join('');

            let selected = null;
            confirmBtn.classList.add('hidden');
            resultDiv.textContent = '';
            nextBtn.classList.add('hidden');

            optionsDiv.querySelectorAll('.vote-opt-option').forEach(el => {
                el.addEventListener('click', () => {
                    optionsDiv.querySelectorAll('.vote-opt-option').forEach(x => {
                        x.classList.remove('!border-lime-400', '!bg-lime-400/12', '!text-lime-400');
                    });
                    el.classList.add('!border-lime-400', '!bg-lime-400/12', '!text-lime-400');
                    selected = el.dataset.word;
                    confirmBtn.classList.remove('hidden');
                    hapticLight();
                });
                el.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        el.click();
                    }
                });
            });

            confirmBtn.onclick = async () => {
                if (!selected) {
                    showToast('اختر كلمة!', 'warning');
                    return;
                }

                if (ButtonManager.isDisabled('btn-online-sc-confirm')) return;
                ButtonManager.disable('btn-online-sc-confirm', 'جاري التحقق...');

                const correctAns = room.secret_word || '???';
                const isCorrect = (selected === correctAns);

                optionsDiv.querySelectorAll('.vote-opt-option').forEach(el => {
                    el.style.pointerEvents = 'none';
                    el.style.opacity = '0.5';
                });
                confirmBtn.classList.add('hidden');

                if (isCorrect) {
                    await sb.from('room_players')
                        .update({ total_score: (myPlayer.total_score || 0) + 20 })
                        .eq('id', OS.myPlayerId);
                    resultDiv.innerHTML = '<span class="text-lime-400 font-extrabold">✅ إجابة صحيحة! +20 نقطة إنقاذ</span>';
                    spawnCF(50);
                    hapticSuccessWithSound();
                } else {
                    resultDiv.innerHTML =
                        `<span class="text-rose-500 font-extrabold">❌ خطأ! الكلمة الصحيحة: ${esc(correctAns)}</span>`;
                    playSound('error');
                }

                await sb.from('rooms').update({
                    sc_chosen: selected,
                    sc_correct: isCorrect,
                    updated_at: new Date().toISOString()
                }).eq('id', room.id);

                ButtonManager.enable('btn-online-sc-confirm');

                if (OS.isHost) {
                    setTimeout(async () => {
                        await sb.from('rooms').update({
                            status: 'leaderboard',
                            updated_at: new Date().toISOString()
                        }).eq('id', room.id);
                        showToast('🏆 النتائج النهائية!', 'success');
                        hapticSuccessWithSound();
                    }, 3000);
                } else {
                    nextBtn.classList.remove('hidden');
                    nextBtn.textContent = '⏳ جاري عرض النتائج...';
                    nextBtn.disabled = true;
                }
            };
        }

        function refreshSCView(room) {
            const resultDiv = document.getElementById('online-sc-result');
            const nextBtn = document.getElementById('btn-online-sc-next');

            if (room.sc_chosen) {
                if (room.sc_correct) {
                    resultDiv.innerHTML = '<span class="text-lime-400 font-extrabold">✅ تم الإنقاذ! +20 نقطة</span>';
                    spawnCF(50);
                    hapticSuccessWithSound();
                } else {
                    resultDiv.innerHTML =
                        `<span class="text-rose-500 font-extrabold">❌ خطأ! الكلمة الصحيحة: ${esc(room.secret_word || '???')}</span>`;
                    playSound('error');
                }
                document.querySelectorAll('#online-sc-options .vote-opt-option').forEach(el => {
                    el.style.pointerEvents = 'none';
                });
                document.getElementById('btn-online-sc-confirm').classList.add('hidden');
                if (OS.isHost) {
                    setTimeout(async () => {
                        await OS.supabase.from('rooms').update({
                            status: 'leaderboard',
                            updated_at: new Date().toISOString()
                        }).eq('id', OS.roomId);
                    }, 3000);
                } else {
                    nextBtn.classList.remove('hidden');
                    nextBtn.textContent = '⏳ جاري عرض النتائج...';
                    nextBtn.disabled = true;
                }
            }
        }

        // ==============================================================
        // ===== لوحة المتصدرين =====
        // ==============================================================

        async function showOnlineLeaderboard() {
            showScreen('online-leaderboard');
            const sb = OS.supabase;
            if (!sb || !OS.roomId) return;

            const { data: room, error: roomErr } = await sb.from('rooms').select('*').eq('id', OS.roomId).single();
            if (roomErr || !room) {
                showToast('❌ خطأ في تحميل البيانات', 'error');
                return;
            }

            const players = OS.gameData?.players || [];
            if (!players.length) {
                const { data: pData } = await sb.from('room_players').select('*').eq('room_id', OS.roomId);
                if (pData) OS.gameData = { ...OS.gameData, players: pData };
            }

            const sorted = [...(OS.gameData?.players || [])].sort((a, b) => (b.total_score || 0) - (a.total_score || 0));
            const secretWord = room.secret_word || '???';
            const oddPlayer = (OS.gameData?.players || []).find(p => p.is_odd === true);
            const oddName = oddPlayer ? oddPlayer.player_name : '???';
            const category = room.category || 'غير محدد';
            const mode = room.mode === 'mindbending' ? 'ذهني' : 'تقليدي';

            const headline = document.getElementById('online-lb-headline');
            const content = document.getElementById('online-lb-content');

            headline.textContent = '🏆 النتائج النهائية';

            let html = `
                <div class="glass-panel rounded-2xl p-6 text-center">
                    <p class="text-[#8892a6]">الكلمة السرية: <span class="text-cyan-400 font-bold">${esc(secretWord)}</span></p>
                    <p class="text-[#8892a6] text-sm">برا السالفة: <span class="text-rose-500 font-bold">${esc(oddName)}</span></p>
                    <p class="text-[#8892a6] text-sm">الفئة: <span class="text-cyan-400 font-bold">${esc(category)}</span> | الوضع: <span class="text-purple-400 font-bold">${mode}</span></p>
                </div>
                <div class="glass-panel rounded-2xl p-5">
                    <h3 class="font-extrabold mb-3 text-white">🏆 الترتيب</h3>
            `;

            sorted.forEach((p, i) => {
                const idx = (OS.gameData?.players || []).indexOf(p);
                let medal = '';
                let medalColor = '';
                if (i === 0) {
                    medal = '<i class="fa-solid fa-crown text-yellow-400 ml-1"></i>';
                    medalColor = 'text-yellow-400';
                } else if (i === 1) {
                    medal = '<i class="fa-solid fa-medal text-slate-300 ml-1"></i>';
                    medalColor = 'text-slate-300';
                } else if (i === 2) {
                    medal = '<i class="fa-solid fa-medal text-amber-600 ml-1"></i>';
                    medalColor = 'text-amber-600';
                } else {
                    medal = `<span class="text-slate-500 text-sm ml-1">${i+1}.</span>`;
                    medalColor = 'text-slate-400';
                }
                html += `
                    <div class="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                        <span class="text-white ${medalColor}">${medal} ${avHTML(p.player_name, idx, 'sm')} ${esc(p.player_name)}</span>
                        <span class="font-extrabold text-white">${p.total_score||0} نقطة</span>
                    </div>
                `;
            });
            html += `</div>`;
            content.innerHTML = html;

            const newRoundBtn = document.getElementById('btn-online-lb-newround');
            const leaveBtn = document.getElementById('btn-online-lb-leave');

            newRoundBtn.onclick = async () => {
    if (ButtonManager.isDisabled('btn-online-lb-newround')) return;
    ButtonManager.disable('btn-online-lb-newround', 'جاري التحضير...');

    try {
        // 🔥 الحل: إعادة تعيين ready_for_result
        await sb.from('room_players')
            .update({ ready_for_result: false })
            .eq('room_id', OS.roomId);

        await sb.from('rooms').update({
            status: 'lobby',
            secret_word: null,
            odd_player_id: null,
            odd_word: null,
            current_round: 0,
            total_rounds: 6,
            qa_question: null,
            qa_answer: null,
            qa_answered: false,
            qa_asker_id: null,
            qa_respondent_id: null,
            qa_phase: 'waiting',
            qa_round: 0,
            qa_total_rounds: QA_CONFIG.TOTAL_ROUNDS,
            qa_question_submitted: false,
            qa_answer_submitted: false,
            qa_round_complete: false,
            sc_chosen: null,
            sc_correct: false,
            updated_at: new Date().toISOString()
        }).eq('id', OS.roomId);

        await sb.from('room_players')
            .update({
                is_ready: false,
                is_odd: false,
                has_revealed: false,
                ready_for_next_round: false
            })
            .eq('room_id', OS.roomId);

        await sb.from('votes').delete().eq('room_id', OS.roomId);
        await sb.from('qa_history').delete().eq('room_id', OS.roomId);

        OS.usedWords = [];
        OS._qaRealtimeSetup = false;
        OS.revealFlipped = false;
        OS.revealReadyClicked = false;
        OS.readyForNextRound = false;
        window._votingResetDone = false; // 🔥 إعادة تعيين علم التصويت
        lastPhase = 'lobby';
        lastQaData = null;
        lastVoteData = null;
        lastScData = null;

        showToast('🔄 جولة جديدة!', 'success');
        hapticSuccessWithSound();
        renderOnlineRoom();
        showScreen('online-room');

    } catch (e) {
        console.error('New round error:', e);
        showToast('❌ فشل بدء جولة جديدة: ' + e.message, 'error');
    } finally {
        ButtonManager.enable('btn-online-lb-newround');
    }
};

            leaveBtn.onclick = () => { leaveOnlineRoom(); };
            if (window.lucide) lucide.createIcons();
        }

        // ===== حذف جميع الغرف =====
        async function deleteAllRooms() {
            const sb = OS.supabase;
            if (!sb) { showToast('❌ Supabase غير مهيأ', 'error'); return; }
            try {
                const { error: voteError } = await sb.from('votes').delete().neq('id',
                    '00000000-0000-0000-0000-000000000000');
                if (voteError) console.warn('Votes delete error:', voteError);
                const { error: historyError } = await sb.from('qa_history').delete().neq('id',
                    '00000000-0000-0000-0000-000000000000');
                if (historyError) console.warn('History delete error:', historyError);
                const { error: playerError } = await sb.from('room_players').delete().neq('id',
                    '00000000-0000-0000-0000-000000000000');
                if (playerError) console.warn('Players delete error:', playerError);
                const { error: roomError } = await sb.from('rooms').delete().neq('id',
                    '00000000-0000-0000-0000-000000000000');
                if (roomError) {
                    showAlert('❌ فشل حذف الغرف: ' + roomError.message, 'error');
                    return;
                }
                showToast('✅ تم حذف جميع الغرف والبيانات بنجاح!', 'success');
                hapticSuccessWithSound();
                renderPublicRooms();
                OS.roomId = null;
                OS.roomCode = null;
                OS.isHost = false;
                OS.myPlayerId = null;
                OS.gameData = null;
                OS._qaRealtimeSetup = false;
                OS.revealFlipped = false;
                OS.revealReadyClicked = false;
                OS.readyForNextRound = false;
                if (OS.currentPhase !== 'lobby') {
                    showScreen('online-lobby');
                }
            } catch (e) {
                showAlert('❌ خطأ في الحذف: ' + e.message, 'error');
            }
        }

        function confirmDeleteAllRooms() {
            showCustomModal('⚠️ تحذير!', 'هل أنت متأكد من حذف جميع الغرف والبيانات؟ هذا الإجراء لا يمكن التراجع عنه!', 'error',
                'نعم، حذف الكل', 'إلغاء', deleteAllRooms);
        }

        // ==============================================================
        // ===== دوال اللعبة المحلية =====
        // ==============================================================

        function renderSetup() {
            renderPlayerChips();
            renderCatGrid();
            renderModeSelector();
            updateSetupUI();
        }

        function renderPlayerChips() {
            const c = document.getElementById('players-chips');
            c.innerHTML = S.players.map((p, i) => `
                    <span class="flex items-center gap-3 px-4 py-2.5 bg-white/4 border border-white/7 rounded-[26px] font-bold text-sm text-white">
                        ${avHTML(p.name,i,'sm')} <span>${esc(p.name)}</span>
                        <button class="remove-chip w-6 h-6 rounded-full bg-red-500/25 text-white flex items-center justify-center text-xs shrink-0 border-none cursor-pointer hover:bg-red-500/50 transition-all" data-idx="${i}" aria-label="حذف">✕</button>
                    </span>
                `).join('');
            c.querySelectorAll('.remove-chip').forEach(b => b.addEventListener('click', e => { e.stopPropagation();
                S.players.splice(parseInt(b.dataset.idx), 1);
                renderSetup();
                hapticAndSound('click'); }));
        }

        function renderCatGrid() {
            const g = document.getElementById('cat-grid');
            const cats = Object.keys(WORD_CLUSTERS);
            const sel = S.selectedCategory || cats[0];
            if (!S.selectedCategory) S.selectedCategory = cats[0];
            g.innerHTML = cats.map(cat => {
                const m = CFG.CAT_META[cat] || { icon: 'box' };
                return `<div class="cat-card-option ${cat===sel?'selected':''}" data-cat="${esc(cat)}" tabindex="0" role="radio">
                        <i data-lucide="${m.icon}" class="w-6 h-6 stroke-current"></i>
                        <span>${esc(cat)}</span>
                    </div>`;
            }).join('');
            g.querySelectorAll('.cat-card-option').forEach(cd => {
                cd.addEventListener('click', () => {
                    g.querySelectorAll('.cat-card-option').forEach(c => c.classList.remove('selected'));
                    cd.classList.add('selected');
                    S.selectedCategory = cd.dataset.cat;
                    updateSetupUI();
                    hapticAndSound('click');
                });
                cd.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault();
                        cd.click(); } });
            });
            if (window.lucide) lucide.createIcons();
        }

        function renderModeSelector() {
            const sel = S.selectedMode || 'traditional';
            if (!S.selectedMode) S.selectedMode = 'traditional';
            document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
            const target = document.querySelector(`.mode-card[data-mode="${sel}"]`);
            if (target) target.classList.add('selected');
            document.querySelectorAll('.mode-card').forEach(c => {
                c.addEventListener('click', () => {
                    document.querySelectorAll('.mode-card').forEach(x => x.classList.remove('selected'));
                    c.classList.add('selected');
                    S.selectedMode = c.dataset.mode;
                    updateSetupUI();
                    hapticAndSound('click');
                });
            });
        }

        function updateSetupUI() {
            const n = S.players.length;
            document.getElementById('setup-count-badge').textContent = n + ' لاعب' + (n !== 1 ? 'ين' : '');
            document.getElementById('setup-hint').textContent = n < CFG.MIN_PLAYERS ? `الحد الأدنى ${CFG.MIN_PLAYERS} لاعبين (أضفت ${n})` :
                ` ${n} لاعبين جاهزين`;
            document.getElementById('setup-hint').innerHTML = n < CFG.MIN_PLAYERS ?
                `الحد الأدنى ${CFG.MIN_PLAYERS} لاعبين (أضفت ${n})` :
                `<i class="fa-solid fa-check-circle text-emerald-400 ml-1"></i> ${n} لاعبين جاهزين`;
            document.getElementById('btn-setup-start').disabled = n < CFG.MIN_PLAYERS || !S.selectedCategory || !S
            .selectedMode;
        }

        // ===== دوال اللعبة المحلية =====
        function startNewRound() {
            const cat = S.selectedCategory || Object.keys(WORD_CLUSTERS)[0];
            const clusters = WORD_CLUSTERS[cat];
            if (!clusters || clusters.length === 0) { showAlert('لا توجد كلمات في هذه الفئة!', 'error'); return; }
            const availableClusters = clusters.filter(cluster => !S.usedWords.includes(cluster[0]));
            if (availableClusters.length === 0) {
                S.usedWords = [];
                showToast('🔄 تم إعادة تعيين قائمة الكلمات', 'info');
                return startNewRound();
            }
            const cluster = availableClusters[randInt(0, availableClusters.length - 1)];
            const word = cluster[0];
            S.usedWords.push(word);
            S.secretWord = word;
            S.oddIndex = randInt(0, S.players.length - 1);
            if (S.selectedMode === 'mindbending') {
                const related = cluster.slice(1);
                S.oddWord = related[randInt(0, related.length - 1)];
            } else { S.oddWord = null; }
            S.currentRevealIdx = 0;
            S.revealFlipped = false;
            S.currentQRound = 0;
            S.qUsedPairs = [];
            S.currentVoterIdx = 0;
            S.votes = new Array(S.players.length).fill(-1);
            S.roundScores = null;
            setupSecretReveal();
        }

        function setupSecretReveal() {
            S.currentRevealIdx = 0;
            S.revealFlipped = false;
            renderSecretPlayer(0);
            showScreen('secret');
        }

        function renderSecretPlayer(idx) {
            S.currentRevealIdx = idx;
            const p = S.players[idx];
            const isOdd = (idx === S.oddIndex);
            document.getElementById('secret-title').textContent = '📱 مرر الهاتف إلى...';
            document.getElementById('secret-player-name').textContent = p.name;
            document.getElementById('secret-progress').textContent = `اللاعب ${idx+1} من ${S.players.length}`;
            rebuildCardDOM(isOdd);
        }

        function rebuildCardDOM(isOdd) {
            const container = document.getElementById('reveal-scene-container');
            container.innerHTML = '';
            const card = document.createElement('div');
            card.className = 'reveal-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            const front = document.createElement('div');
            front.className = 'reveal-face reveal-front';
            front.innerHTML =
                '<span style="font-size:3rem;">👆</span><span class="font-bold text-white">اضغط للكشف عن دورك</span><span class="text-[#8892a6] text-xs">اضغط مرة أخرى للإخفاء</span>';
            const back = document.createElement('div');
            back.className = 'reveal-face reveal-back';
            back.id = 'reveal-back-face-dynamic';
            if (isOdd && S.selectedMode === 'traditional') {
                back.classList.add('liar-back');
                back.innerHTML = `
                    <div class="text-center w-full">
                        <i class="fa-solid fa-user-secret text-3xl text-rose-500 block mb-2"></i>
                        <span class="text-xl font-black text-rose-500 block">أنت برا السالفة!</span>
                        <div class="mt-3 px-4 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl w-full">
                            <div class="flex items-center justify-center gap-2 text-amber-400">
                                <i class="fa-solid fa-tag text-xs"></i>
                                <span class="text-[11px] font-bold">الفئة: ${esc(S.selectedCategory)}</span>
                            </div>
                        </div>
                        <div class="mt-3 text-[#8892a6] text-xs space-y-1">
                            <div class="flex items-center justify-center gap-1.5">
                                <i class="fa-solid fa-users text-[10px]"></i>
                                <span>اللاعبون الآخرون يعرفون الكلمة من هذه الفئة</span>
                            </div>
                            <div class="flex items-center justify-center gap-1.5">
                                <i class="fa-solid fa-lightbulb text-[10px] text-yellow-400"></i>
                                <span>حاول التخمين والتكيف معهم!</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (isOdd && S.selectedMode === 'mindbending') {
                back.innerHTML = `
                    <div class="text-center w-full">
                        <i class="fa-solid fa-brain text-2xl text-cyan-400 block mb-2"></i>
                        <span class="text-2xl font-black text-cyan-400 tracking-wider block">${esc(S.oddWord)}</span>
                        <div class="mt-2 px-4 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl w-full">
                            <div class="flex items-center justify-center gap-2 text-amber-400">
                                <i class="fa-solid fa-tag text-xs"></i>
                                <span class="text-[11px] font-bold">الفئة: ${esc(S.selectedCategory)}</span>
                            </div>
                        </div>
                        <div class="mt-3 text-[#8892a6] text-xs space-y-1">
                            <div class="flex items-center justify-center gap-1.5">
                                <i class="fa-solid fa-arrow-right-arrow-left text-[10px] text-cyan-400"></i>
                                <span>لديك كلمة مختلفة عن الآخرين!</span>
                            </div>
                            <div class="flex items-center justify-center gap-1.5">
                                <i class="fa-solid fa-eye-slash text-[10px]"></i>
                                <span>احفظها ولا تقلها لأحد</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                back.innerHTML = `
                    <div class="text-center w-full">
                        <i class="fa-solid fa-key text-2xl text-emerald-400 block mb-2"></i>
                        <span class="text-2xl font-black text-cyan-400 tracking-wider block">${esc(S.secretWord)}</span>
                        <div class="mt-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl w-full">
                            <div class="flex items-center justify-center gap-2 text-emerald-400">
                                <i class="fa-solid fa-tag text-xs"></i>
                                <span class="text-[11px] font-bold">الفئة: ${esc(S.selectedCategory)}</span>
                            </div>
                        </div>
                        <div class="mt-3 text-[#8892a6] text-xs">
                            <div class="flex items-center justify-center gap-1.5">
                                <i class="fa-solid fa-eye-slash text-[10px]"></i>
                                <span>احفظ الكلمة ولا تقلها لأحد!</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            card.appendChild(front);
            card.appendChild(back);
            container.appendChild(card);
            S.revealFlipped = false;
            card.addEventListener('click', () => {
                if (S.revealFlipped) { card.classList.remove('flipped');
                    S.revealFlipped = false;
                    card.style.pointerEvents = 'auto'; return; }
                S.revealFlipped = true;
                card.classList.add('flipped');
                card.style.pointerEvents = 'auto';
                hapticSuccessWithSound();
                playSound('reveal');
                setTimeout(() => { document.getElementById('btn-secret-next').classList.remove('hidden');
                    document.getElementById('btn-secret-next').focus(); }, 1000);
            });
            card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault();
                    card.click(); } });
            document.getElementById('btn-secret-next').classList.add('hidden');
        }

        function advanceSecret() {
            const nxt = S.currentRevealIdx + 1;
            if (nxt >= S.players.length) setupQuestioning();
            else renderSecretPlayer(nxt);
        }

        function setupQuestioning() {
            S.totalQuestionRounds = randInt(6, 7);
            S.currentQRound = 0;
            S.qUsedPairs = [];
            renderQRound();
            showScreen('questioning');
            document.getElementById('btn-q-next').classList.remove('hidden');
            document.getElementById('btn-q-to-vote').classList.add('hidden');
        }

        function pickPair() {
            const n = S.players.length;
            const all = [];
            for (let a = 0; a < n; a++)
                for (let t = 0; t < n; t++)
                    if (a !== t) all.push([a, t]);
            const unused = all.filter(([a, t]) => !S.qUsedPairs.some(([ua, ut]) => ua === a && ut === t));
            let pair = unused.length ? unused[randInt(0, unused.length - 1)] : all[randInt(0, all.length - 1)];
            if (!unused.length) S.qUsedPairs = [];
            S.qUsedPairs.push(pair);
            return pair;
        }

        function renderQRound() {
            S.currentQRound++;
            const [ai, ti] = pickPair();
            const asker = S.players[ai],
                target = S.players[ti];
            document.getElementById('q-round-badge').textContent = `الجولة ${S.currentQRound} من ${S.totalQuestionRounds}`;
            document.getElementById('q-asker-badge').innerHTML =
                `${avHTML(asker.name,ai,'sm')} <span>${esc(asker.name)}</span>`;
            document.getElementById('q-target-badge').innerHTML =
                `${avHTML(target.name,ti,'sm')} <span>${esc(target.name)}</span>`;
            document.getElementById('q-prompt').textContent = `${asker.name} اسأل ${target.name}!`;
            if (S.currentQRound >= S.totalQuestionRounds) {
                document.getElementById('btn-q-next').classList.add('hidden');
                document.getElementById('btn-q-to-vote').classList.remove('hidden');
                document.getElementById('btn-q-to-vote').focus();
            } else {
                document.getElementById('btn-q-next').classList.remove('hidden');
                document.getElementById('btn-q-to-vote').classList.add('hidden');
            }
            if (window.lucide) lucide.createIcons();
        }

        function setupVoting() {
            S.currentVoterIdx = 0;
            S.votes = new Array(S.players.length).fill(-1);
            renderVoter(0);
            showScreen('voting');
            document.getElementById('btn-voting-done').classList.add('hidden');
        }

        function renderVoter(vi) {
            S.currentVoterIdx = vi;
            const voter = S.players[vi];
            document.getElementById('voting-voter-name').textContent = `🗳️ ${voter.name}، صوّت بسرية:`;
            document.getElementById('voting-progress').textContent = `الناخب ${vi+1} من ${S.players.length}`;
            const c = document.getElementById('voting-options');
            c.innerHTML = S.players.map((p, i) => i === vi ? '' : `
                        <div class="vote-opt-option bg-white/[0.025] border-2 border-white/5 rounded-2xl p-4 cursor-pointer transition-all hover:border-rose-500 hover:bg-rose-500/5 hover:shadow-[0_0_22px_rgba(255,45,110,0.06)] text-center min-h-[46px] flex items-center justify-center gap-3 font-bold text-white" data-idx="${i}" tabindex="0" role="button">
                            ${avHTML(p.name,i,'sm')} <span>${esc(p.name)}</span>
                        </div>
                    `).filter(Boolean).join('');
            c.querySelectorAll('.vote-opt-option').forEach(o => {
                o.addEventListener('click', () => {
                    c.querySelectorAll('.vote-opt-option').forEach(x => x.classList.remove(
                        '!border-rose-500', '!bg-rose-500/12', '!text-rose-500',
                        '!shadow-[0_0_30px_rgba(255,45,110,0.15)]'));
                    o.classList.add('!border-rose-500', '!bg-rose-500/12', '!text-rose-500',
                        '!shadow-[0_0_30px_rgba(255,45,110,0.15)]');
                    S.votes[vi] = parseInt(o.dataset.idx);
                    hapticAndSound('click');
                    setTimeout(advanceVoter, 300);
                });
                o.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault();
                        o.click(); } });
            });
        }

        function advanceVoter() {
            const nxt = S.currentVoterIdx + 1;
            if (nxt >= S.players.length) {
                document.getElementById('voting-progress').innerHTML =
                    `<i class="fa-solid fa-check-circle text-emerald-400 ml-1"></i> اكتمل التصويت!`;
                document.getElementById('voting-options').innerHTML = '';
                document.getElementById('voting-voter-name').textContent = 'تم تسجيل جميع الأصوات';
                const doneBtn = document.getElementById('btn-voting-done');
                doneBtn.classList.remove('hidden');
                doneBtn.focus();
                hapticSuccessWithSound();
                playSound('vote');
            } else renderVoter(nxt);
        }

        function computeScores() {
            const votes = S.votes;
            const oddIdx = S.oddIndex;
            const n = S.players.length;
            const vc = new Array(n).fill(0);
            votes.forEach(t => { if (t >= 0) vc[t]++; });
            const maxV = Math.max(...vc);
            const tied = [];
            vc.forEach((c, i) => { if (c === maxV && c > 0) tied.push(i); });
            let caughtIdx = null;
            if (tied.length === 1) caughtIdx = tied[0];
            else if (tied.length > 1) caughtIdx = tied[randInt(0, tied.length - 1)];
            const oddCaught = (caughtIdx === oddIdx);
            const scores = new Array(n).fill(0);
            const log = new Array(n).fill('');
            for (let i = 0; i < n; i++) {
                if (i !== oddIdx && votes[i] === oddIdx) { scores[i] += 10;
                    log[i] += 'صوّت صحيحاً (+10) '; }
            }
            if (!oddCaught) { scores[oddIdx] += 30;
                log[oddIdx] += 'خداع كامل (+30) '; }
            if (oddCaught && vc[oddIdx] < n) {
                const missed = n - vc[oddIdx];
                const bonus = missed * 5;
                scores[oddIdx] += bonus;
                log[oddIdx] += `خداع جزئي (${missed}×5=+${bonus}) `;
            }
            if (oddCaught) {
                for (let i = 0; i < n; i++) {
                    if (i !== oddIdx && vc[i] === 0) { scores[i] += 15;
                        log[i] += 'تفادى الشك (+15) '; }
                }
            }
            S.players.forEach((p, i) => { p.totalScore = (p.totalScore || 0) + (scores[i] || 0); });
            S.roundScores = { scores, log, vc, oddCaught, caughtIdx, oddIdx };
            return S.roundScores;
        }

        function startSuspenseSequence() {
            const rs = computeScores();
            showScreen('suspense');
            const content = document.getElementById('suspense-content');
            const caughtName = rs.caughtIdx !== null ? S.players[rs.caughtIdx].name : '???';
            content.innerHTML = `
                        <div class="glass-panel rounded-2xl p-6 text-center">
                            <p class="text-[#8892a6] text-lg" id="suspense-line1"></p>
                            <h1 class="text-rose-500 font-black text-3xl mt-2" id="suspense-name"></h1>
                        </div>
                        <div class="glass-panel rounded-2xl p-6 text-center hidden border-2 border-lime-400" id="suspense-reveal-box">
                            <p class="text-[#8892a6]">والشخص الذي خارج السالفة هو...</p>
                            <h1 class="text-lime-400 font-black text-4xl mt-2" id="suspense-odd-name"></h1>
                        </div>`;
            const headline = document.getElementById('suspense-headline');
            if (headline) headline.textContent = '🔮 لحظة الحقيقة...';
            const line1 = document.getElementById('suspense-line1');
            const nameEl = document.getElementById('suspense-name');
            const revealBox = document.getElementById('suspense-reveal-box');
            const oddNameEl = document.getElementById('suspense-odd-name');
            const fullText = `اللاعبون صوّتوا على استبعاد:`;
            let i = 0;
            const words = fullText.split(' ');
            const typeInterval = setInterval(() => {
                if (i < words.length) { line1.textContent += (i > 0 ? ' ' : '') + words[i];
                    i++; } else {
                    clearInterval(typeInterval);
                    nameEl.textContent = caughtName;
                    playSound('reveal');
                    setTimeout(() => {
                        revealBox.classList.remove('hidden');
                        oddNameEl.textContent = S.players[rs.oddIdx].name;
                        hapticSuccessWithSound();
                        if (rs.oddCaught) spawnCF(70);
                        setTimeout(() => {
                            if (rs.oddCaught) setupSecondChance();
                            else showLeaderboard();
                        }, 2500);
                    }, 2000);
                }
            }, 110);
        }

        let scCorrect = false;

        function setupSecondChance() {
            const rs = S.roundScores;
            showScreen('secondchance');
            scCorrect = false;
            const oddPlayer = S.players[rs.oddIdx];
            document.getElementById('sc-prompt').textContent = `${oddPlayer.name}، تم كشفك! لكن لديك فرصة للإنقاذ...`;
            const cluster = WORD_CLUSTERS[S.selectedCategory]?.find(c => c.includes(S.secretWord)) || [S.secretWord,
                'غير معروف', 'غير معروف', 'غير معروف'
            ];
            const correct = S.secretWord;
            const distractors = shuffle(cluster.filter(w => w !== correct)).slice(0, 3);
            const options = shuffle([correct, ...distractors]);
            const c = document.getElementById('sc-options');
            c.innerHTML = options.map(w => `
                        <div class="vote-opt-option bg-white/[0.025] border-2 border-white/5 rounded-2xl p-4 cursor-pointer transition-all hover:border-lime-400 hover:bg-lime-400/5 text-center min-h-[46px] flex items-center justify-center font-bold text-white" data-word="${esc(w)}" tabindex="0" role="button">
                            <span>${esc(w)}</span>
                        </div>
                    `).join('');
            let selWord = null;
            c.querySelectorAll('.vote-opt-option').forEach(o => {
                o.addEventListener('click', () => {
                    c.querySelectorAll('.vote-opt-option').forEach(x => x.classList.remove(
                        '!border-lime-400', '!bg-lime-400/12', '!text-lime-400'));
                    o.classList.add('!border-lime-400', '!bg-lime-400/12', '!text-lime-400');
                    selWord = o.dataset.word;
                    document.getElementById('btn-sc-confirm').classList.remove('hidden');
                    hapticAndSound('click');
                });
                o.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault();
                        o.click(); } });
            });
            document.getElementById('btn-sc-confirm').classList.add('hidden');
            document.getElementById('btn-sc-next').classList.add('hidden');
            document.getElementById('sc-result').textContent = '';
            document.getElementById('btn-sc-confirm').onclick = () => {
                if (!selWord) { showToast('اختر كلمة أولاً!', 'warning'); return; }
                scCorrect = (selWord === correct);
                if (scCorrect) {
                    S.players[rs.oddIdx].totalScore += 20;
                    S.roundScores.scores[rs.oddIdx] += 20;
                    S.roundScores.log[rs.oddIdx] += 'إنقاذ (+20) ';
                    document.getElementById('sc-result').innerHTML =
                        '<span class="text-lime-400 font-extrabold">✅ إجابة صحيحة! +20 نقطة إنقاذ</span>';
                    spawnCF(50);
                    hapticSuccessWithSound();
                } else {
                    document.getElementById('sc-result').innerHTML =
                        `<span class="text-rose-500 font-extrabold">❌ خطأ! الكلمة الصحيحة: ${esc(correct)}</span>`;
                    playSound('error');
                }
                document.getElementById('btn-sc-confirm').classList.add('hidden');
                c.querySelectorAll('.vote-opt-option').forEach(o => o.style.pointerEvents = 'none');
                document.getElementById('btn-sc-next').classList.remove('hidden');
                document.getElementById('btn-sc-next').focus();
            };
            document.getElementById('btn-sc-next').onclick = () => showLeaderboard();
        }

        function showLeaderboard() {
            const rs = S.roundScores;
            showScreen('leaderboard');
            const sorted = [...S.players].sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0));
            document.getElementById('lb-headline').innerHTML = rs.oddCaught ?
                '<i class="fa-solid fa-party-horn text-lime-400 ml-2"></i> تم الكشف عن برا السالفة!' :
                '<i class="fa-solid fa-skull text-rose-500 ml-2"></i> برا السالفة فاز!';
            let html = '';
            html +=
                `<div class="glass-panel rounded-2xl p-6 text-center"><p class="text-[#8892a6]">الكلمة السرية:</p><h1 class="text-cyan-400 font-black text-3xl">${esc(S.secretWord)}</h1><p class="text-[#8892a6] text-sm mt-2">الفئة: ${esc(S.selectedCategory)} | الوضع: ${S.selectedMode==='traditional'?'تقليدي':'ذهني'}</p></div>`;
            html += `<div class="glass-panel rounded-2xl p-5"><h3 class="font-extrabold mb-3 text-white">تفاصيل الجولة</h3>`;
            S.players.forEach((p, i) => {
                html +=
                    `<div class="flex justify-between items-center py-1.5 flex-wrap gap-2"><span class="text-white">${avHTML(p.name,i,'sm')} ${esc(p.name)}</span><span class="text-[#8892a6] text-xs">${rs.log[i]||'—'}</span><span class="font-bold text-xs px-3 py-1 rounded-full ${rs.scores[i]>0?'bg-lime-400/15 text-lime-400':'bg-rose-500/15 text-rose-500'}">+${rs.scores[i]||0}</span></div>`;
            });
            html += `</div>`;
            html +=
                `<div class="glass-panel rounded-2xl p-5"><h3 class="font-extrabold mb-3 text-white"><i class="fa-solid fa-trophy text-yellow-400 ml-2"></i> الترتيب العام (تراكمي)</h3>`;
            sorted.forEach((p, i) => {
                const idx = S.players.indexOf(p);
                let medal = '';
                let medalColor = '';
                if (i === 0) {
                    medal = '<i class="fa-solid fa-crown text-yellow-400 ml-1"></i>';
                    medalColor = 'text-yellow-400';
                } else if (i === 1) {
                    medal = '<i class="fa-solid fa-medal text-slate-300 ml-1"></i>';
                    medalColor = 'text-slate-300';
                } else if (i === 2) {
                    medal = '<i class="fa-solid fa-medal text-amber-600 ml-1"></i>';
                    medalColor = 'text-amber-600';
                } else {
                    medal = `<span class="text-slate-500 text-sm ml-1">${i+1}.</span>`;
                    medalColor = 'text-slate-400';
                }
                html +=
                    `<div class="flex justify-between items-center py-1.5"><span class="text-white ${medalColor}">${medal} ${avHTML(p.name,idx,'sm')} ${esc(p.name)}</span><span class="font-extrabold text-white">${p.totalScore||0} نقطة</span></div>`;
            });
            html += `</div>`;
            document.getElementById('lb-content').innerHTML = html;
            if (window.lucide) lucide.createIcons();
            hapticSuccessWithSound();
        }

        function showNewRoundScreen() {
            showScreen('newround');
            const cats = Object.keys(WORD_CLUSTERS);
            const grid = document.getElementById('newround-cat-grid');
            grid.innerHTML = cats.map(cat => {
                const m = CFG.CAT_META[cat] || { icon: 'box' };
                return `<div class="cat-card-option" data-cat="${esc(cat)}" tabindex="0" role="radio">
                        <i data-lucide="${m.icon}" class="w-6 h-6 stroke-current"></i>
                        <span>${esc(cat)}</span>
                    </div>`;
            }).join('');
            let newCat = S.selectedCategory || cats[0];
            let newMode = S.selectedMode || 'traditional';
            const updateBtn = () => { document.getElementById('btn-newround-start').disabled = !newCat || !newMode; };
            grid.querySelectorAll('.cat-card-option').forEach(cd => {
                if (cd.dataset.cat === newCat) cd.classList.add('selected');
                cd.addEventListener('click', () => {
                    grid.querySelectorAll('.cat-card-option').forEach(c => c.classList.remove('selected'));
                    cd.classList.add('selected');
                    newCat = cd.dataset.cat;
                    updateBtn();
                    hapticAndSound('click');
                });
            });
            const modeGrid = document.getElementById('newround-mode-selector');
            modeGrid.querySelectorAll('.mode-card').forEach(mc => {
                if (mc.dataset.mode === newMode) mc.classList.add('selected');
                mc.addEventListener('click', () => {
                    modeGrid.querySelectorAll('.mode-card').forEach(x => x.classList.remove('selected'));
                    mc.classList.add('selected');
                    newMode = mc.dataset.mode;
                    updateBtn();
                    hapticAndSound('click');
                });
            });
            updateBtn();
            document.getElementById('btn-newround-start').onclick = () => {
                if (!newCat || !newMode) return;
                S.selectedCategory = newCat;
                S.selectedMode = newMode;
                hapticSuccessWithSound();
                startNewRound();
            };
            document.getElementById('btn-newround-cancel').onclick = () => { showLeaderboard(); };
            if (window.lucide) lucide.createIcons();
        }

        // ==============================================================
        // ===== استعادة الحالة =====
        // ==============================================================

        async function attemptReconnect() {
    const storedUser = getStoredUser();
    if (!storedUser) return false;

    // تحقق من صحة المستخدم في قاعدة البيانات
    const valid = await validateStoredUser();
    if (!valid) {
        // المستخدم غير موجود، نخرج من محاولة إعادة الاتصال
        return false;
    }

    OS.authUser = { username: storedUser.username };
    OS.playerName = storedUser.username;
    localStorage.setItem('barra_player_name', storedUser.username);
    updateProfileUI();

    const sb = OS.supabase || initSupabase();
    if (!sb) return false;

    const roomId = localStorage.getItem('barra_room_id');
    if (!roomId) return false;

    const overlay = document.getElementById('reconnect-overlay');
    if (overlay) overlay.classList.add('active');

    try {
        const { data: room, error: roomErr } = await sb.from('rooms').select('*').eq('id', roomId).maybeSingle();
        if (roomErr || !room) {
            localStorage.removeItem('barra_room_id');
            if (overlay) overlay.classList.remove('active');
            return false;
        }

        const clientId = getClientId();
        const { data: player, error: playerErr } = await sb.from('room_players').select('*').eq('room_id', roomId)
            .eq('client_id', clientId).maybeSingle();
        if (playerErr || !player) {
            localStorage.removeItem('barra_room_id');
            if (overlay) overlay.classList.remove('active');
            return false;
        }

        OS.roomId = room.id;
        OS.roomCode = room.code;
        OS.isHost = (room.host_id === clientId);
        OS.myPlayerId = player.id;
        OS.clientId = clientId;
        OS.currentPhase = room.status || 'lobby';
        OS.playerName = player.player_name;
        OS.authUser = { username: player.player_name };
        OS.hasRevealed = player.has_revealed || false;
        OS.isReady = true;
        OS.revealFlipped = false;
        OS.revealReadyClicked = false;
        OS.readyForNextRound = player.ready_for_next_round || false;
        OS.hostCategory = room.category;
        OS.hostMode = room.mode;
        OS.ready_for_result = player.ready_for_result || false;

        if (room.status !== 'lobby') {
            const { data: allPlayers } = await sb.from('room_players').select('*').eq('room_id', roomId);
            OS.gameData = { room, players: allPlayers || [] };
        }

        subscribeToRoom(room.id);
        subscribeToPlayers(room.id);

        if (OS.refreshInterval) {
            clearInterval(OS.refreshInterval);
            OS.refreshInterval = null;
        }

        // ==========================================================
        // 🔥 المشكلة 10: استعادة بيانات QA وتحديث الواجهة
        // ==========================================================
        if (room.status === 'qa') {
            OS.qaRound = room.qa_round || 0;
            OS.qaTotalRounds = room.qa_total_rounds || room.total_rounds || OS.gameData?.players?.length || QA_CONFIG.TOTAL_ROUNDS;
            OS.qaAskerId = room.qa_asker_id;
            OS.qaRespondentId = room.qa_respondent_id;
            OS.qaQuestionText = room.qa_question;
            OS.qaAnswerText = room.qa_answer;
            OS.qaAnswered = room.qa_answered || false;
            OS.qaPhase = room.qa_phase || 'waiting';
            OS.qaQuestionSubmitted = room.qa_question_submitted || false;
            OS.qaAnswerSubmitted = room.qa_answer_submitted || false;
            OS.qaRoundComplete = room.qa_round_complete || false;

            const myPlayer = OS.gameData?.players?.find(p => p.client_id === OS.clientId);
            if (myPlayer) {
                if (myPlayer.id === room.qa_asker_id) OS.qaRole = 'asker';
                else if (myPlayer.id === room.qa_respondent_id) OS.qaRole = 'respondent';
                else OS.qaRole = 'spectator';
            }
            OS._qaRealtimeSetup = false;
            
            // 🔥 تحديث واجهة الأسئلة بعد الاستعادة مباشرة
            // نستخدم setTimeout للتأكد من أن الشاشة قد تم تحميلها
            setTimeout(() => {
                if (document.getElementById('screen-online-qa')?.classList.contains('active')) {
                    refreshQAView(room);
                    // تحديث دور اللاعب
                    updateMyRole(room);
                    // تحديث شارة الجولة
                    const roundDisplay = document.getElementById('online-qa-round-display');
                    if (roundDisplay) {
                        const totalRounds = room.qa_total_rounds || OS.gameData?.players?.length || QA_CONFIG.TOTAL_ROUNDS;
                        const displayRound = Math.min((room.qa_round || 0) + 1, totalRounds);
                        roundDisplay.textContent = `الجولة ${displayRound} من ${totalRounds}`;
                    }
                    // إذا كانت الجولة مكتملة، أظهر زر الجاهزية
                    if (room.qa_round_complete) {
                        showNextRoundReadyButton(room);
                    }
                }
            }, 300);
        }

        if (room.used_words) {
            try { OS.usedWords = JSON.parse(room.used_words) || []; } catch (e) { OS.usedWords = []; }
        }

        // استعادة بيانات التصويت
        if (room.status === 'voting') {
            OS._voteInterval = null;
            window._votingResetDone = false;
        }

        // استعادة بيانات التشويق
        if (room.status === 'suspense' || room.status === 'secondchance') {
            if (OS._suspenseInterval) {
                clearInterval(OS._suspenseInterval);
                OS._suspenseInterval = null;
            }
        }

        switch (OS.currentPhase) {
            case 'lobby':
                renderOnlineRoom();
                showScreen('online-room');
                break;
            case 'reveal':
                showOnlineReveal();
                break;
            case 'qa':
                showOnlineQA();
                break;
            case 'voting':
                showOnlineVoting();
                break;
            case 'suspense':
                showOnlineSuspense();
                break;
            case 'secondchance':
                showOnlineSecondChance();
                break;
            case 'leaderboard':
                showOnlineLeaderboard();
                break;
            default:
                renderOnlineRoom();
                showScreen('online-room');
        }

        OS.stateRestored = true;
        if (overlay) overlay.classList.remove('active');
        showToast(`✅ تم استعادة الجلسة في "${room.name}"`, 'success');
        hapticSuccessWithSound();
        return true;

    } catch (e) {
        console.error('Reconnect error:', e);
        if (overlay) overlay.classList.remove('active');
        return false;
    }
}

        // ==============================================================
        // ===== كونفيتي =====
        // ==============================================================

        const cfCanvas = document.getElementById('confetti-canvas');
        let cfCtx = null,
            cfParts = [],
            cfRAF = null;

        function initCF() { if (!cfCtx) cfCtx = cfCanvas.getContext('2d');
            cfCanvas.width = innerWidth;
            cfCanvas.height = innerHeight; }

        function spawnCF(n = 70) {
            initCF();
            cfCanvas.classList.remove('hidden');
            const cols = ['#00e0ff', '#ff2d6e', '#a8ff5a', '#ffd54f', '#b44dff', '#4cff8d', '#fff'];
            cfParts = [];
            for (let i = 0; i < n; i++) {
                cfParts.push({
                    x: Math.random() * cfCanvas.width,
                    y: -25 - Math.random() * 130,
                    w: Math.random() * 7 + 3,
                    h: Math.random() * 5 + 2,
                    color: cols[Math.floor(Math.random() * cols.length)],
                    vx: (Math.random() - 0.5) * 5,
                    vy: Math.random() * 3 + 2.5,
                    rot: Math.random() * 360,
                    rotV: (Math.random() - 0.5) * 10,
                    opacity: 1,
                    decay: 0.004 + Math.random() * 0.014
                });
            }
            if (!cfRAF) animCF();
        }

        function animCF() {
            if (!cfCtx) return;
            cfCtx.clearRect(0, 0, cfCanvas.width, cfCanvas.height);
            let alive = false;
            for (const p of cfParts) {
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.rotV;
                p.opacity -= p.decay;
                if (p.opacity <= 0) continue;
                alive = true;
                cfCtx.save();
                cfCtx.translate(p.x, p.y);
                cfCtx.rotate(p.rot * Math.PI / 180);
                cfCtx.globalAlpha = Math.max(0, p.opacity);
                cfCtx.fillStyle = p.color;
                cfCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                cfCtx.restore();
            }
            if (alive) cfRAF = requestAnimationFrame(animCF);
            else { cfRAF = null;
                cfCanvas.classList.add('hidden');
                cfParts = []; }
        }

        // ===== جسيمات الخلفية =====
        function spawnBg() {
            const c = document.getElementById('bg-particles');
            if (!c) return;
            c.innerHTML = '';
            const cols = ['#00e0ff', '#ff2d6e', '#a8ff5a', '#ffd54f', '#b44dff', '#fff'];
            for (let i = 0; i < 44; i++) {
                const d = document.createElement('div');
                d.className = 'particle';
                const s = Math.random() * 5 + 2;
                d.style.width = s + 'px';
                d.style.height = s + 'px';
                d.style.left = Math.random() * 100 + '%';
                d.style.background = cols[Math.floor(Math.random() * cols.length)];
                d.style.animationDuration = (Math.random() * 16 + 8) + 's';
                d.style.animationDelay = (Math.random() * 14) + 's';
                d.style.boxShadow = `0 0 ${s*3}px ${d.style.background}`;
                c.appendChild(d);
            }
        }

        // ==============================================================
        // ===== ربط الأحداث =====
        // ==============================================================

        function bindEvents() {
            // أزرار الشريط العلوي
            const btnDevToggle = document.getElementById('btn-dev-toggle');
            if (btnDevToggle) {
                btnDevToggle.addEventListener('click', () => { toggleDevModal(true);
                    hapticAndSound('click'); });
            }

            const btnDevClose = document.getElementById('btn-dev-close');
            if (btnDevClose) {
                btnDevClose.addEventListener('click', () => { toggleDevModal(false);
                    hapticAndSound('click'); });
            }

            const btnHome = document.getElementById('btn-home');
            if (btnHome) {
                btnHome.addEventListener('click', () => {
                    goToLanding();
                });
            }

            const profileAvatar = document.getElementById('profile-avatar');
            const profileNameDisplay = document.getElementById('profile-name-display');
            if (profileAvatar) {
                profileAvatar.addEventListener('click', () => {
                    hapticAndSound('click');
                    showProfileModal();
                });
            }
            if (profileNameDisplay) {
                profileNameDisplay.addEventListener('click', () => {
                    hapticAndSound('click');
                    showProfileModal();
                });
            }

            const profileCloseBtn = document.getElementById('profile-close-btn');
            if (profileCloseBtn) {
                profileCloseBtn.addEventListener('click', () => { hideProfileModal();
                    hapticAndSound('click'); });
            }
            document.getElementById('profile-modal').addEventListener('click', (e) => {
                if (e.target === document.getElementById('profile-modal') || e.target.classList.contains(
                        'profile-modal-overlay')) { hideProfileModal();
                    hapticAndSound('click'); }
            });

            const updateNameBtn = document.getElementById('profile-update-name');
            if (updateNameBtn) {
                updateNameBtn.addEventListener('click', handleUpdateName);
            }
            document.getElementById('profile-edit-name').addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleUpdateName();
            });

            const changePassBtn = document.getElementById('profile-change-password');
            if (changePassBtn) {
                changePassBtn.addEventListener('click', handleChangePassword);
            }
            document.getElementById('profile-confirm-password').addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleChangePassword();
            });

            const logoutBtn = document.getElementById('profile-logout');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', handleLogout);
            }

            const btnLandingPlay = document.getElementById('btn-landing-play');
            if (btnLandingPlay) {
                btnLandingPlay.addEventListener('click', () => {
                    hapticAndSound('click');
                    document.getElementById('mode-select-modal').classList.remove('hidden');
                });
            }

            const btnLandingHow = document.getElementById('btn-landing-how');
            if (btnLandingHow) {
                btnLandingHow.addEventListener('click', () => { hapticAndSound('click');
                    showScreen('instructions'); });
            }

            // ===== ربط أزرار المودال الجديد =====
            const modal = document.getElementById('mode-select-modal');
            const btnModalLocal = document.getElementById('modal-btn-local');
            const btnModalOnline = document.getElementById('modal-btn-online');
            const btnModalCancel = document.getElementById('modal-btn-cancel');

            if (btnModalLocal) {
                btnModalLocal.addEventListener('click', () => {
                    modal.classList.add('hidden');
                    hapticAndSound('click');
                    showScreen('setup');
                    renderSetup();
                });
            }

            if (btnModalOnline) {
                btnModalOnline.addEventListener('click', () => {
                    modal.classList.add('hidden');
                    hapticAndSound('click');
                    const sb = initSupabase();
                    if (!sb) return;
                    OS.clientId = getClientId();
                    OS.playerName = localStorage.getItem('barra_player_name') || '';
                    requireAuth(() => { showOnlineLobby(); });
                });
            }

            if (btnModalCancel) {
                btnModalCancel.addEventListener('click', () => {
                    modal.classList.add('hidden');
                    hapticAndSound('click');
                });
            }

            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.add('hidden');
                    }
                });
            }

            const btnOnlineCreate = document.getElementById('btn-online-create');
            if (btnOnlineCreate) {
                btnOnlineCreate.addEventListener('click', async () => {
                    const btn = btnOnlineCreate;
                    const originalHTML = btn.innerHTML;
                    btn.disabled = true;
                    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جاري إنشاء الغرفة...`;
                    btn.classList.add('opacity-70', 'cursor-wait');
                    try {
                        const name = document.getElementById('online-room-name').value.trim() || 'غرفة جديدة';
                        const isPublic = OS.visibility === 'public';
                        const room = await createOnlineRoom(name, isPublic);
                        if (room) {
                            localStorage.setItem('barra_room_id', room.id);
                        } else {
                            btn.disabled = false;
                            btn.innerHTML = originalHTML;
                            btn.classList.remove('opacity-70', 'cursor-wait');
                        }
                    } catch (e) {
                        btn.disabled = false;
                        btn.innerHTML = originalHTML;
                        btn.classList.remove('opacity-70', 'cursor-wait');
                    }
                });
            }

            const btnOnlineJoin = document.getElementById('btn-online-join');
            if (btnOnlineJoin) {
                btnOnlineJoin.addEventListener('click', async () => {
                    const btn = btnOnlineJoin;
                    const originalHTML = btn.innerHTML;
                    const code = document.getElementById('online-join-code').value.trim();
                    if (!code || code.length !== 6) {
                        showToast('أدخل كوداً مكوناً من 6 أرقام', 'warning');
                        return;
                    }
                    btn.disabled = true;
                    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جاري الانضمام...`;
                    btn.classList.add('opacity-70', 'cursor-wait');
                    try {
                        await joinOnlineRoom(code);
                    } catch (e) {
                        console.error('Join error:', e);
                    } finally {
                        btn.disabled = false;
                        btn.innerHTML = originalHTML;
                        btn.classList.remove('opacity-70', 'cursor-wait');
                    }
                });
            }

            const onlineJoinCode = document.getElementById('online-join-code');
            if (onlineJoinCode) {
                onlineJoinCode.addEventListener('keydown', e => {
                    if (e.key === 'Enter') { e.preventDefault();
                        document.getElementById('btn-online-join').click(); }
                });
            }

            const btnOnlineQuick = document.getElementById('btn-online-quick');
            if (btnOnlineQuick) {
                btnOnlineQuick.addEventListener('click', quickJoin);
            }

            const btnRefreshRooms = document.getElementById('btn-refresh-rooms');
            if (btnRefreshRooms) {
                btnRefreshRooms.addEventListener('click', renderPublicRooms);
            }

            const btnHostStart = document.getElementById('btn-online-host-start');
            if (btnHostStart) {
                btnHostStart.addEventListener('click', hostStartGame);
            }

            const btnRoomLeave = document.getElementById('btn-online-room-leave');
            if (btnRoomLeave) {
                btnRoomLeave.addEventListener('click', () => {
                    leaveOnlineRoom();
                    localStorage.removeItem('barra_room_id');
                });
            }

            const btnSetupBack = document.getElementById('btn-setup-back');
            if (btnSetupBack) {
                btnSetupBack.addEventListener('click', () => {
                    hapticAndSound('click');
                    showScreen('landing');
                });
            }

            const btnAddPlayer = document.getElementById('btn-add-player');
            if (btnAddPlayer) {
                btnAddPlayer.addEventListener('click', () => {
                    const inp = document.getElementById('input-player-name');
                    const nm = inp.value.trim();
                    if (!nm) { showToast('اكتب اسماً!', 'warning'); return; }
                    if (S.players.some(p => p.name === nm)) { showToast('الاسم موجود!', 'warning'); return; }
                    if (S.players.length >= CFG.MAX_PLAYERS) { showToast(`الحد الأقصى ${CFG.MAX_PLAYERS}`,
                            'warning'); return; }
                    S.players.push({ name: nm, totalScore: 0 });
                    inp.value = '';
                    inp.focus();
                    renderSetup();
                    hapticAndSound('click');
                });
            }

            const inputPlayerName = document.getElementById('input-player-name');
            if (inputPlayerName) {
                inputPlayerName.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault();
                        document.getElementById('btn-add-player').click(); } });
            }

            const btnSetupStart = document.getElementById('btn-setup-start');
            if (btnSetupStart) {
                btnSetupStart.addEventListener('click', () => {
                    if (S.players.length < CFG.MIN_PLAYERS) { showToast(`تحتاج ${CFG.MIN_PLAYERS} لاعبين`,
                            'warning'); return; }
                    if (!S.selectedCategory) { showToast('اختر فئة!', 'warning'); return; }
                    hapticSuccessWithSound();
                    playSound('game_start');
                    startNewRound();
                });
            }

            const btnSecretNext = document.getElementById('btn-secret-next');
            if (btnSecretNext) {
                btnSecretNext.addEventListener('click', () => { hapticAndSound('click');
                    advanceSecret(); });
            }

            const btnQNext = document.getElementById('btn-q-next');
            if (btnQNext) {
                btnQNext.addEventListener('click', () => { hapticAndSound('click');
                    renderQRound(); });
            }

            const btnQToVote = document.getElementById('btn-q-to-vote');
            if (btnQToVote) {
                btnQToVote.addEventListener('click', () => { hapticSuccessWithSound();
                    setupVoting(); });
            }

            const btnVotingDone = document.getElementById('btn-voting-done');
            if (btnVotingDone) {
                btnVotingDone.addEventListener('click', () => { hapticSuccessWithSound();
                    startSuspenseSequence(); });
            }

            const btnNewRound = document.getElementById('btn-new-round');
            if (btnNewRound) {
                btnNewRound.addEventListener('click', () => { hapticAndSound('click');
                    showNewRoundScreen(); });
            }

            const btnEndGame = document.getElementById('btn-end-game');
            if (btnEndGame) {
                btnEndGame.addEventListener('click', () => { hapticAndSound('click');
                    resetToLanding(); });
            }

            const btnLbLeave = document.getElementById('btn-online-lb-leave');
            if (btnLbLeave) {
                btnLbLeave.onclick = () => { leaveOnlineRoom(); };
            }

            const btnInstBack = document.getElementById('btn-inst-back');
            const btnInstBackBottom = document.getElementById('btn-inst-back-bottom');

            if (btnInstBack) {
                btnInstBack.addEventListener('click', () => { hapticAndSound('click');
                    showScreen('landing'); });
            }
            if (btnInstBackBottom) {
                btnInstBackBottom.addEventListener('click', () => { hapticAndSound('click');
                    showScreen('landing'); });
            }

            // أحداث زر المشاركة
            const shareToggle = document.getElementById('btn-share-toggle');
            const shareModal = document.getElementById('share-modal');
            const shareClose = document.getElementById('btn-share-close');

            if (shareToggle) {
                shareToggle.addEventListener('click', () => {
                    shareModal.classList.add('active');
                    hapticAndSound('click');
                });
            }

            if (shareClose) {
                shareClose.addEventListener('click', () => {
                    shareModal.classList.remove('active');
                    hapticAndSound('click');
                });
            }

            if (shareModal) {
                shareModal.addEventListener('click', (e) => {
                    if (e.target === shareModal) shareModal.classList.remove('active');
                });
            }

            const btnShareCopyCode = document.getElementById('btn-share-copy-code');
            if (btnShareCopyCode) {
                btnShareCopyCode.addEventListener('click', () => {
                    const code = document.getElementById('share-room-code').textContent;
                    navigator.clipboard.writeText(code).then(() => {
                        showToast('✅ تم نسخ الكود: ' + code, 'success');
                        hapticAndSound('click');
                    }).catch(() => {
                        const temp = document.createElement('input');
                        temp.value = code;
                        document.body.appendChild(temp);
                        temp.select();
                        document.execCommand('copy');
                        temp.remove();
                        showToast('✅ تم نسخ الكود: ' + code, 'success');
                        hapticAndSound('click');
                    });
                });
            }

            const btnShareCopyMain = document.getElementById('btn-share-copy-main');
            if (btnShareCopyMain) {
                btnShareCopyMain.addEventListener('click', () => {
                    const code = document.getElementById('share-room-code').textContent;
                    const inviteUrl = window.location.origin + window.location.pathname + '?room=' + code;
                    navigator.clipboard.writeText(inviteUrl).then(() => {
                        showToast('✅ تم نسخ رابط الدعوة!', 'success');
                        hapticAndSound('click');
                    }).catch(() => {
                        const temp = document.createElement('input');
                        temp.value = inviteUrl;
                        document.body.appendChild(temp);
                        temp.select();
                        document.execCommand('copy');
                        temp.remove();
                        showToast('✅ تم نسخ رابط الدعوة!', 'success');
                        hapticAndSound('click');
                    });
                });
            }

            window.shareTo = function(platform) {
                const code = document.getElementById('share-room-code').textContent;
                const inviteUrl = window.location.origin + window.location.pathname + '?room=' + code;
                const message = `تعال نلعب "برا السالفة"! 🎯\n\nكود الغرفة: ${code}\nرابط الدخول: ${inviteUrl}`;
                const encodedMessage = encodeURIComponent(message);
                const encodedUrl = encodeURIComponent(inviteUrl);

                let targetUrl = "";
                switch (platform) {
                    case 'whatsapp':
                        targetUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
                        break;
                    case 'twitter':
                        const twitterText = encodeURIComponent(
                            `تعال نلعب "برا السالفة"! 🎯\n\nكود الغرفة: ${code}\nرابط الدخول:`);
                        targetUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${encodedUrl}`;
                        break;
                    case 'telegram':
                        targetUrl =
                            `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(`تعال نلعب "برا السالفة"! 🎯\n\nكود الغرفة: ${code}`)}`;
                        break;
                    case 'discord':
                        if (navigator.clipboard) {
                            navigator.clipboard.writeText(message);
                            alert("تم نسخ الرسالة! يمكنك لصقها في ديسكورد الآن.");
                        }
                        targetUrl = `https://discord.com/channels/@me`;
                        break;
                }
                if (targetUrl) window.open(targetUrl, '_blank');
                hapticAndSound('click');
            };

            bindAuthEvents();

            window.selectVisibility = function(type) {
                OS.visibility = type;
                document.querySelectorAll('.vis-btn').forEach(btn => {
                    btn.className =
                        "vis-btn py-1.5 px-2 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-1.5 bg-slate-950/80 text-slate-400 border-slate-800 hover:border-slate-700";
                });
                const activeBtn = document.getElementById(`vis-${type}`);
                if (activeBtn) {
                    activeBtn.className =
                        "vis-btn py-1.5 px-2 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-1.5 bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-sm shadow-purple-500/20";
                }
                hapticAndSound('click');
            };

            window.selectPlayers = function(count) {
                OS.playerLimit = count;
                document.querySelectorAll('.ply-btn').forEach(btn => {
                    btn.className =
                        "ply-btn py-1.5 text-xs font-extrabold rounded-xl border transition-all bg-slate-950/80 text-slate-400 border-slate-800 hover:border-slate-700";
                });
                const activeBtn = document.getElementById(`ply-${count}`);
                if (activeBtn) {
                    activeBtn.className =
                        "ply-btn py-1.5 text-xs font-extrabold rounded-xl border transition-all bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-sm shadow-purple-500/20";
                }
                hapticAndSound('click');
            };

            window.toggleQAHistory = toggleQAHistory;

            window.closeCustomAlert = closeCustomAlert;
            window.confirmModalAction = confirmModalAction;
            window.confirmDeleteAllRooms = confirmDeleteAllRooms;

            console.log('✅ تم ربط جميع الأحداث بنجاح');
        }

        function toggleDevModal(show) {
            const modal = document.getElementById('dev-modal');
            if (show) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // ==============================================================
        // ===== التهيئة =====
        // ==============================================================

        async function init() {
            S.selectedCategory = Object.keys(WORD_CLUSTERS)[0];
            S.selectedMode = 'traditional';
            S.rngSeed = Date.now();
            S.usedWords = [];
            spawnBg();
            renderSetup();
            showScreen('landing');
            if (window.lucide) lucide.createIcons();

            SoundManager.init();

            const sb = initSupabase();
            OS.supabase = sb;

            updateProfileUI();

            // نحاول استعادة الجلسة فقط إذا كان المستخدم صحيحاً
const validUser = await validateStoredUser();
if (validUser) {
    // إذا كان المستخدم صحيحاً، نحاول استعادة الغرفة
    const reconnected = await attemptReconnect();
    if (!reconnected) {
        showScreen('landing');
    }
} else {
    // المستخدم غير صحيح، نعرض شاشة الترحيب بدون فتح المصادقة
    showScreen('landing');
}

            setTimeout(() => {
                const activeScreen = document.querySelector('.screen.active');
                if (activeScreen) {
                    const name = activeScreen.id.replace('screen-', '');
                    updateHeaderState(name);
                }
            }, 100);

            bindEvents();
            makeShareFabDraggable();

            console.log('🔮 برا السالفة v12.0 — النسخة النهائية المكملة');
            console.log('✅ جميع التحسينات المطلوبة تم تطبيقها');
            console.log('✅ نظام الأسئلة يعمل بدون مؤقتات مع نظام موافقة جميع اللاعبين للانتقال');
            console.log('✅ عدد الجولات بناءً على عدد اللاعبين');
            console.log('✅ إخفاء الإجابة عن المجيب وإظهارها فقط للسائل');
            console.log('✅ حالة الأزرار تعرض "تم الإرسال" أو "فشل، حاول مرة أخرى"');
            console.log('✅ استعادة الحالة بعد تحديث الصفحة تعمل بشكل صحيح');
            console.log('✅ إعدادات المضيف (الفئة والوضع) تثبت عند انضمام لاعبين جدد');
            console.log('✅ الملف الشخصي بتصميم احترافي جديد');
            console.log('✅ المصادقة تعمل مع Toast بدلاً من التنبيهات الداخلية');
            console.log('✅ المؤثرات الصوتية مفعلة');
            console.log('✅ شاشة الكشف بتصميم 3D الجديد مع شريط تقدم');
            console.log('✅ اللعبة جاهزة للاستخدام');
        }

        // ===== جعل زر المشاركة قابلاً للسحب =====
        function makeShareFabDraggable() {
            const fab = document.getElementById('share-fab');
            if (!fab) return;

            let isDragging = false;
            let hasMoved = false;
            let startX, startY, initialX, initialY;
            const DRAG_THRESHOLD = 5;

            const onStart = (e) => {
                const touch = e.touches ? e.touches[0] : e;
                isDragging = true;
                hasMoved = false;
                startX = touch.clientX;
                startY = touch.clientY;
                const rect = fab.getBoundingClientRect();
                initialX = rect.left;
                initialY = rect.top;
                fab.style.cursor = 'grabbing';
                fab.style.transition = 'none';
            };

            const onMove = (e) => {
                if (!isDragging) return;
                const touch = e.touches ? e.touches[0] : e;
                const dx = touch.clientX - startX;
                const dy = touch.clientY - startY;

                if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
                    hasMoved = true;
                    e.preventDefault();
                }

                let newX = initialX + dx;
                let newY = initialY + dy;

                const fabWidth = fab.offsetWidth || 58;
                const fabHeight = fab.offsetHeight || 58;
                const maxX = window.innerWidth - fabWidth - 10;
                const maxY = window.innerHeight - fabHeight - 10;
                newX = Math.max(10, Math.min(newX, maxX));
                newY = Math.max(10, Math.min(newY, maxY));

                fab.style.left = newX + 'px';
                fab.style.top = newY + 'px';
                fab.style.right = 'auto';
                fab.style.bottom = 'auto';
                e.preventDefault();
            };

            const onEnd = () => {
                if (isDragging) {
                    isDragging = false;
                    fab.style.cursor = 'grab';
                    fab.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                }
            };

            fab.addEventListener('mousedown', onStart);
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);

            fab.addEventListener('touchstart', onStart, { passive: true });
            document.addEventListener('touchmove', onMove, { passive: false });
            document.addEventListener('touchend', onEnd);

            fab.addEventListener('click', function(e) {
                if (hasMoved) {
                    e.stopPropagation();
                    e.preventDefault();
                    hasMoved = false;
                    return false;
                }
                const shareToggle = document.getElementById('btn-share-toggle');
                if (shareToggle && !hasMoved) {
                    const event = new Event('click', { bubbles: true });
                    shareToggle.dispatchEvent(event);
                }
                return true;
            });
        }

        // ===== بدء التطبيق =====
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }